const fs = require('fs');
const path = require('path');


const storeFS =async ({ stream, filename }) => {
    const uploadDir = '../public/images/';
    filename = `${Date.now()}-${filename.toLowerCase() }`
    const fileName = path.join(__dirname,uploadDir,filename);

    return await new Promise((resolve, reject) =>
        stream.on('error', error => {
                if (stream.truncated) // delete the truncated file
                  fs.unlinkSync(fileName);
                  reject(error);
            })
            .pipe(fs.createWriteStream(fileName))
            .on('error', error => reject(error))
            .on('finish', () => resolve({ filename }))
    );
}



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

  userCreateAppointment:async (parent,{userId,collectorId,image,},{models})=> {

const appointment = await models.appointment.create({userId,collectorId});

const {filename,createReadStream} = await image;

const streat =createReadStream();

const result = await storeFS({filename,streat});

const imageUrl = result.filename;

const service = await models.service.create({appointmentId:appointment.id,imageUrl});

return appointment;

},




}