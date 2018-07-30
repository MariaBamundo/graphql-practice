var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLID = require('graphql').GraphQLID;
var TodoType = require('../types/task');
var TodoModel = require('../../schema');

exports.add = {
  type: TodoType.todoType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    //checked: { set to false..?}
    isDone: {
      type: new GraphQLNonNull(GraphQLBoolean),
    }
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