module.exports = {
  test:()=> 'Testing ',
  userSignUp:async (parent,{firstName,lastName,email,password},{models})=> await models.user.create({firstName,lastName,email,password}),
  userSignIn:async (parent,{email,telephone,password},{models})=> await models.user.findOne({$or:[{email,password},{telephone,password}]}),
  collectorSignUp:async (parent,{firstName,lastName,email,telephone,password},{models})=> await models.collector.create({$or:[{firstName,lastName,email,telephone,password}]}),
  collectorSignIn:async (parent,{email,telephone,password})=> await models.collector.fidOne({$or:[{email,password},{telephone,password}]}),
  updateUser:async (parent,{userId,telephone,district,city},{models})=> {
  
    const location = await models.location.create({userId,city,district,city,longitude,latitude});

    const user = await models.user.update({telephone,locationId:location.id},{where: {id:userId}});

    return user;

  },
  updateCollector:async (parent,{collectorId,telephone,district,city,numberPlate},{models})=> {
    
    const location = await models.location.create({collectorId,city,district,city,longitude,latitude});

    const collector = await models.collector.update({telephone,locationId:location.id,numberPlate},{where: {id:collectorId}});

    return collector;

  },
makeAppointment:async (parent,{userId,collectorId},{models})=> await models.appointment.create({userId,collectorId}),




}