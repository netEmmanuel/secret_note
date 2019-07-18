module.exports = async (req, res) => {
  const allNotes = await Note.find();
  res.view("pages/home", { allNotes });
};
