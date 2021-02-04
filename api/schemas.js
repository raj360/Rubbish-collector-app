const {gql} = require('apollo-server-express');

module.exports = gql`
scalar DateTime

type Query{
  test:String
}

type Mutation{
  test:String
  userSignUp(firstName:String,LastName:String,email:String,password:String):User!
  userSignIn(email:String,telephone:String,password:String):User
}


type User{
  id:Int!
  firstName:String!
  lastName:String!
  telephone:String!
  email:String!
  imageUrl:String!
  appointment:[Appointment!]
  payment:[Payment!]
}

type Collector{
  id:Int!
  firstName:String!
  lastName:String!
  telephone:String!
  email:String!
  numberPlate:String!
  imageUrl:String!
  appointment:[Appointment!]
}

type Service{
  id:Int!
  imageUrl:String!
  cost:Float!
}

type Review{
  id:Int!
  rating:Int!
}

type Appointment{
 id:Int!
 status:String!
 review:Review
 service:Service
 createdAt:DateTime!
 updatedAt:DateTime!
}

type Location{
  id:Int!
  latitude:String!
  longitude:String!
  district:String!
  city:String!
}

type Payment{
  id:Int!
  status:String!
  method:String!
  service:Service!
  createdAt:DateTime!
  updatedAt:DateTime!
}

`;

