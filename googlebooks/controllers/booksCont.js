const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Book
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.static(422).json(err));
    },
    findbyID: function(req, res) {
        db.Book
        .findByID(req.params.id)
        .then(dbmodel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    creat: function(req, res) {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Book
            .findByID({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};