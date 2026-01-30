const supabase = require("../configs/supabase.config");

// Create User
const createUser = async (req, res) => {
  try {
    const { name, email, password, age, role } = req.body;

    // Check duplicate email
    const { data: existingUser } = await supabase.from("users").select("*").eq("email", email).single();
    if (existingUser) return res.status(400).json({ status: false, message: "Email already exists" });

    // Insert user (password plain text)
    const { data, error } = await supabase.from("users").insert([
      { name, email, password, age, role }
    ]).select();

    if (error) throw error;

    res.status(201).json({ status: true, message: "User created successfully", user: data[0] });

  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};

// Get All Users
const getUsers = async (req, res) => {
  try {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;

    res.status(200).json({ status: true, users: data });

  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

// Get Single User
const getSingleUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const { data, error } = await supabase.from("users").select("*").eq("id", userId).single();
    if (error || !data) return res.status(404).json({ status: false, message: "User not found" });

    res.status(200).json({ status: true, user: data });

  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

// Update User
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    const { data, error } = await supabase.from("users").update(updateData).eq("id", userId).select();
    if (error || !data.length) return res.status(404).json({ status: false, message: "User not found" });

    res.status(200).json({ status: true, message: "User updated", user: data[0] });

  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const { data, error } = await supabase.from("users").delete().eq("id", userId).select();
    if (error || !data.length) return res.status(404).json({ status: false, message: "User not found" });

    res.status(200).json({ status: true, message: "User deleted successfully" });

  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = { createUser, getUsers, getSingleUser, updateUser, deleteUser };
