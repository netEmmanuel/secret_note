module.exports = {
  friendlyName: "Create",

  description: "Create note.",

  inputs: {
    title: {
      description: "title of note",
      type: "string",
      required: true
    },
    body: {
      description: "body of note",
      type: "string",
      required: true
    }
  },

  exits: {},

  fn: async function(inputs) {
    const note = await Note.create({
      title: inputs.title,
      body: inputs.body
    });
    return;
  }
};
