module.exports = {
  test:()=> 'Testing ',
  userSignUp:async (parent,{firstName,lastName,email,password},{models})=> await models.user.create({firstName,lastName,email,password}),
  userSignIn:async (parent,{email,telephone,password},{models})=> await models.user.findOne({$or:[{email,password},{telephone,password}]}),
  

}