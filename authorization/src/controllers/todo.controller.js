const supabase = require('../config/supabase');

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const userId = req.user.userId;

  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, completed: false, userId }]);

  if (error) return res.status(400).json({ message: error.message });

  res.status(201).json(data);
};

exports.getTodos = async (req, res) => {
  const userId = req.user.userId;

  const { data } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', userId);

  res.status(200).json(data);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data, error } = await supabase
    .from('todos')
    .update(req.body)
    .eq('id', id)
    .eq('userId', userId);

  if (error || data.length === 0) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  res.status(200).json(data);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data, error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)
    .eq('userId', userId);

  if (error || data.length === 0) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  res.status(200).json({ message: 'Todo deleted' });
};
