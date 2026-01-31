const supabase = require("../configs/supabase.config");

// ==================== Add Todo ====================
const addTodo = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({ status: false, message: "Title and userId are required" });
    }

    // Check if user exists
    const { data: existingUser } = await supabase.from("users").select("*").eq("id", userId).single();
    if (!existingUser) {
      return res.status(404).json({ status: false, message: `User not found with id ${userId}` });
    }

    const { data, error } = await supabase
      .from("todos")
      .insert({ title, description, user_id: userId })
      .select()
      .single();

    if (error) return res.status(400).json({ status: false, message: error.message });

    res.status(201).json({ status: true, message: "Todo added successfully", data });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

// ==================== Get Todos ====================
const getTodo = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) return res.status(400).json({ status: false, message: "userId required" });

    const { data, error } = await supabase.from("todos").select("*").eq("user_id", userId);

    if (error || !data) return res.status(404).json({ status: false, message: "No todos found for this user" });

    res.status(200).json({ status: true, message: "Todos fetched successfully", data });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

// ==================== Update Todo ====================
const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { title, description, is_completed } = req.body;

    if (!todoId) return res.status(400).json({ status: false, message: "todoId required" });

    const { data: existing } = await supabase.from("todos").select("*").eq("id", todoId).single();
    if (!existing) return res.status(404).json({ status: false, message: "Todo not found" });

    const { data, error } = await supabase
      .from("todos")
      .update({ title, description, is_completed })
      .eq("id", todoId)
      .select()
      .single();

    if (error) return res.status(400).json({ status: false, message: error.message });

    res.status(200).json({ status: true, message: "Todo updated successfully", data });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

// ==================== Delete Todo ====================
const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    if (!todoId) return res.status(400).json({ status: false, message: "todoId required" });

    const { data: existing } = await supabase.from("todos").select("*").eq("id", todoId).single();
    if (!existing) return res.status(404).json({ status: false, message: "Todo not found" });

    const { data, error } = await supabase.from("todos").delete().eq("id", todoId).select().single();
    if (error) return res.status(400).json({ status: false, message: error.message });

    res.status(200).json({ status: true, message: "Todo deleted successfully", data });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};




module.exports = { addTodo, getTodo, updateTodo, deleteTodo };
