//dummy db
const notes1 = { id: 1, title: "note 1", body: "here is the body" };
const notes2 = { id: 2, title: "note 2", body: "here is the body 1" };
const notes3 = { id: 3, title: "note 3", body: "here is the body 3" };

const allNotes = [notes1, notes2, notes3];

module.exports = {
  create: (req, res) => {
    const title = req.param("title");
    const body = req.body("body");
    const newNotes = { id: 4, title: "note 4", body: "here is the body 4" };
    allNotes.push(newNotes);
    res.send("success");
  },
  notes: (req, res) => {
    res.send(allNotes);
  },
  getNoteById: (req, res) => {
    const noteId = Number(req.param("Id"));
    const filteredNotes = allNotes.filter(note => note.id === noteId);

    if (filteredNotes.length > 0) {
      res.send(filteredNotes[0]);
    } else {
      res.send(`Failed to find note with ${req.param("Id")}`);
    }
  }
};
