module.exports = {
  friendlyName: "Retrieve",

  description: "Retrieve note.",

  exits: {},

  fn: async function() {
    const notes = await Note.find();
    if (notes.length == 0) {
      throw { invalid: { error: "No Notes" } };
    }
    return notes;
  }
};
