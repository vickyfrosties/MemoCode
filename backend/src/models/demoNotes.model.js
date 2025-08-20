export const demoNotesSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "New Note Form Object Validation",
      required: ["title", "description", "category", "link", "picture"],
      properties: {
        title: {
          bsonType: "string",
          description: "The title must be a string and only a string",
        },
        description: {
          bsonType: "string",
          maxLength: 2000,
          description: "The description must contain up to 2000 words maximum.",
        },
        category: {
          bsonType: "string",
          enum: ["programmation", "neuropsychology", "astronomy", "gaming"],
          description: "The category must be one of the values.",
        },
        link: {
          bsonType: "string",
          description: "The url link must be a valid url.",
        },
        picture: {
          bsonType: "string",
          description: "The url picture must be a valid url.",
        },
      },
    },
  },
};
