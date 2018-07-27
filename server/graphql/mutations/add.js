
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var TodoType = require('../types/task');
var TodoModel = require('../../models/todo');

exports.add = {
  type: TodoType.todoType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    }
    //check: { set to false..?}
  },
  resolve(root, params) {
    const tModel = new TodoModel(params);
    const newTask = tModel.save();
    if (!newTask) {
      throw new Error('Error');
    }
    return newTask
  }
}