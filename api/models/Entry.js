const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Entry = new Schema({
  entry_title: {
    type: String
  },
  entry_body: {
    type: String
  }
},{
    collection: 'entries'
});

module.exports = mongoose.model('Entry', Entry);
