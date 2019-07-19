module.exports = {
  friendlyName: "Delete",

  description: "Delete note.",

  inputs: {
    Id: {
      type: "string",
      required: true
    }
  },

  exits: {
    invalid: {
      description: "Invalid request"
    }
  },

  fn: async function(inputs) {
    const note = await Note.destroy({ id: inputs.Id }).fetch();
    if (note.length == 0) {
      throw { invalid: { error: "Note doesn't exist" } };
    }
    return note;
  }
};
