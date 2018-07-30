var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  checked:{
    type: Boolean,
    required: true
  }
});

var Model = mongoose.model('Todo', todoSchema);
module.exports = Model;
