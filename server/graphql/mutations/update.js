var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var TodoType = require('../types/task');
var TodoModel = require('../../models/todo');

exports.update = {
  type: TodoType.todoType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return TodoModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

