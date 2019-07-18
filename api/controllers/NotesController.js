module.exports = {
  create: async (req, res) => {
    const title = req.body.title;
    const body = req.body.body;

    try {
      const note = await Note.create({ title: title, body: body });
      res.send(note);
      res.redirect("/home");
    } catch (err) {
      res.serverError(err.toString());
    }
  },

  notes: async (req, res) => {
    try {
      const notes = await Note.find();
      res.send(notes);
    } catch (err) {
      res.serverError(err.toString());
    }
  },

  delete: async (req, res) => {
    const noteId = Number(req.param("Id"));
    await Note.destroy({ id: noteId });
    res.send("Note Deleted");
  }
};
