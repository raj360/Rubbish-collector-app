const Mutation = require('./mutation');
const Query = require('./query');

const {GraphQLDateTime}  = require('graphql-iso-date')
module.exports={
  Mutation,
  Query,
  DateTime:GraphQLDateTime,
}