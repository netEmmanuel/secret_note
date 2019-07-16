module.exports = {
  create: async (req, res) => {
    const title = req.body.title;
    const body = req.body.text;

    try {
      const note = await Note.create({ title: title, body: body });
      res.send(note);
    } catch (e) {
      res.serverError(e.toString());
    }
  },

  notes: async res => {
    try {
      const notes = await Note.find();
      res.send(notes);
    } catch (e) {
      res.serverError(e.toString());
    }
  },

  findNoteById: (req, res) => {
    const noteId = Number(req.param("Id"));
    const filteredNotes = allNotes.filter(note => note.id === noteId);

    if (filteredNotes.length > 0) {
      res.send(filteredNotes[0]);
    } else {
      res.send(`Failed to find note with ${req.param("Id")}`);
    }
  },

  delete: async (req, res) => {
    const noteId = Number(req.param("Id"));
    await Note.destroy({ id: noteId });
    res.send("Note Deleted");
  }
};
