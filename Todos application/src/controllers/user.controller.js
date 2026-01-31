const supabase = require("../configs/supabase.config");

// ==================== Register User ====================
const userRegister = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ status: false, message: "All fields are required" });
    }

    // Check for existing email
    const { data: existing } = await supabase.from("users").select("*").eq("email", email).single();
    if (existing) return res.status(409).json({ status: false, message: `Email ${email} already exists` });

    const { data, error } = await supabase.from("users").insert({ name, email, phone }).select().single();
    if (error) return res.status(400).json({ status: false, message: error.message });

    res.status(201).json({ status: true, message: "User registered successfully", data });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

// ==================== Get Users ====================
const getUsers = async (req, res) => {
  try {
    const { userId } = req.query;
    let query = supabase.from("users").select("*");

    if (userId) query = query.eq("id", userId).single();

    const { data, error } = await query;
    if (error) return res.status(404).json({ status: false, message: "User not found" });

    res.status(200).json({ status: true, message: "Users fetched successfully", data });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

// ==================== Update User ====================
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, phone } = req.body;

    if (!userId) return res.status(400).json({ status: false, message: "userId required" });

    const { data: existing } = await supabase.from("users").select("*").eq("id", userId).single();
    if (!existing) return res.status(404).json({ status: false, message: "User not found" });

    const { data, error } = await supabase.from("users").update({ name, email, phone }).eq("id", userId).select().single();
    if (error) return res.status(400).json({ status: false, message: error.message });

    res.status(200).json({ status: true, message: "User updated successfully", data });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

// ==================== Delete User ====================
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) return res.status(400).json({ status: false, message: "userId required" });

    const { data: existing } = await supabase.from("users").select("*").eq("id", userId).single();
    if (!existing) return res.status(404).json({ status: false, message: "User not found" });

    const { data, error } = await supabase.from("users").delete().eq("id", userId).select().single();
    if (error) return res.status(400).json({ status: false, message: error.message });

    res.status(200).json({ status: true, message: "User deleted successfully", data });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

module.exports = { userRegister, getUsers, updateUser, deleteUser };
