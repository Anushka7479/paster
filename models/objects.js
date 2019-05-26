var mongoose = require('mongoose');

pasteSchema = mongoose.Schema({
   name: String,
   content: String
});

var paste = mongoose.model(
   'name', pasteSchema
);

module.exports = paste;
