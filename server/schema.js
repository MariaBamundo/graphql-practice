var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  id: {
    // WTF why cant the type be ID type: ID,
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  isDone:{
    type: Boolean,
    required: true
  }
});

var Model = mongoose.model('Schema', todoSchema);
module.exports = Model;
