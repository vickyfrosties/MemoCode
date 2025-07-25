export const noteSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "New Note Form Object Validation",
      required: ["title", "description", "category", "link"],
      properties: {
        title: {
          bsonType: "string",
          description: "The title must be a string and only a string",
        },
        description: {
          bsonType: "string",
          maxLength: 500,
          description: "The description must contain up to 500 words maximum.",
        },
        category: {
          bsonType: "string",
          enum: ["programmation", "neuropsychology", "astronomy", "gaming"],
          description: "The category must be one of the values.",
        },
        link: {
          bsonType: "string",
          description: "The url must be a valid url.",
        },
      },
    },
    validationLevel: "strict",
    validationAction: "error",
  },
};

export const checkNoteInputs = (note) => {
  if (!note.title) {
    console.log("Title is missing, please enter a valid title.");
  } else if (!note.description) {
    console.log("Description is missing, please enter a valid description.");
  } else if (!note.link) {
    console.log("Link is missing, please enter a valid link.");
  } else if (!note.category) {
    console.log("Category is missing, please enter a valid category.");
  }
};
