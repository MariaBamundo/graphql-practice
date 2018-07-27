
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var TodoModel = require('../../models/todo');
var taskType = require('../types/task').todoType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      tasks: {
        type: new GraphQLList(taskType),
        resolve: function () {
          const tasks = TodoModel.find().exec()
          if (!tasks) {
            throw new Error('Error')
          }
          return tasks
        }
      }
    }
  }
});

