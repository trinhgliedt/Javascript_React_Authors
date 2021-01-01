const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
      }
    },
    { timestamps: true }
  );

// register our model and enforce the schema
const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
