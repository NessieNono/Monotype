/// CRUD CODE 

const express = require('express');
const app = express();
const entryRoutes = express.Router();

// Require Entry model in our routes module
let Entry = require('../models/Entry');

// Defined store route
entryRoutes.route('/add').post(function (req, res) {
  let entry = new Entry(req.body);
  console.log("this is the entry we have instantiated: ", entry);
  entry.save()
    .then(entry => {
      res.status(200).json({'entry': 'entry in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
entryRoutes.route('/').get(function (req, res) {
    Entry.find(function (err, entries){
    if(err){
      console.log(err);
    }
    else {
      res.json(entries);
    }
  });
});

// Defined edit route
entryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Entry.findById(id, function (err, entry){
      res.json(entry);
  });
});

//  Defined update route
entryRoutes.route('/update/:id').post(function (req, res) {
    Entry.findById(req.params.id, function(err, next, entry) {
    if (!entry)
      return next(new Error('Could not load Document'));
    else {
        entry.entry_title = req.body.entry_title;
        entry.entry_body = req.body.entry_body;

        entry.save().then(entry => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
entryRoutes.route('/delete/:id').get(function (req, res) {
    entry.findByIdAndRemove({_id: req.params.id}, function(err, entry){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = entryRoutes;