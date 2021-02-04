const {gql} = require('apollo-server-express');

module.exports = gql`
scalar DateTime

type Query{
  test:String
}

type Mutation{
  test:String
  userSignUp(firstName:String,lastName:String,email:String,password:String):User!
  userSignIn(email:String,telephone:String,password:String):User
  collectorSignUp(firstName:String,lastName:String,email:String):Collector!
  collectorSignIn(email:String,telephone:String,password:String):Collector!
  updateUser(userId:Int!,telephone:String,district:String,city:String,longitude:Float,latitude:Float):User
  updateCollector(collectorId:Int!,telephone:String,district:String,city:String,longitude:Float,latitude:Float,numberPlate:String):Collector
  userCreateAppointment(userId:Int,collectorId:Int!,image:Upload!):Appointment
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

