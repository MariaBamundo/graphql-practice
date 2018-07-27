var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var TodoType = require('../types/task');
var TodoModel = require('../../models/todo');

exports.remove = {
  type: TodoType.todoType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedtask = TodoModel.findByIdAndRemove(params.id).exec();
    if (!removedtask) {
      throw new Error('Error')
    }
    return removedtask;
  }
}
