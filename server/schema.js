var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;


var todoSchema = new Schema({
  item: String,
  isDone: Boolean,
});

var Model = mongoose.model('Schema', todoSchema);
module.exports = Model;
