const Author = require("../models/author.model");

// export an object that is full of methods
module.exports = {
  create: function (req, res) {
    console.log("create method executed");
    console.log("req.body: ",req.body);

    Author
      .create(req.body)
      .then((author) => {
        res.json(author);
        console.log("req.body: ",req.body, ",author: ",author);
      })
      .catch((err) => {
        // so that axios' .catch will be triggered
        // for validation errors and other errors
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    console.log("getAll method executed");
    Author
      .find().sort({"name": 1})
      .then((authors) => {
        res.json(authors);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    // .find will always return an array even if only one object is found
    // author.find({ _id: req.params.id })
    Author
      .findById(req.params.id) // .findById returns only one object, no array
      .then((author) => {
        res.json(author);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Author
      .findByIdAndDelete(req.params.id)
      .then((author) => {
        // the author that was deleted or null if id not found
        res.json(author);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    Author
      .findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        // return the updated object rather than the old info
        new: true,
      })
      .then((author) => {
        // the author with updated information
        console.log("update method .then");
        res.json(author);
      })
      .catch((err) => {
        // so that axios' .catch will be triggered
        // for validation errors and other errors
        console.log("update method .catch");
        res.status(400).json(err);
      });
  },

};
