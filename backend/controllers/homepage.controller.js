//import { bookingInfosDB } from "../models/bookingInfo.js";

import { databaseModels } from "../models/sequelize.js";








/*  from dashboard */

let counter = 0;


/*  from dashboard */







const homepageGet = async function (req,res){

  res.locals.logout = "";
    res.render("homepage");
}




const homepagePostBookingInfo = async function (req,res){
 console.log(req.method);
 
 
  //addEventListener(req.method ==='post');
  
  if(req.method==="POST"){
    
    console.log("yes fucking post");
    counter++;

    
 
 








    

  
  
  }
    


 
    
  try{

      
    console.log("display time and date");
    //console.log(req.body);
    const name= req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const appointmenttype = req.body.appointmenttype;
    const address = req.body.address;
    const date = req.body.date;
    const time = req.body.time;

    var dateAndTimeNow = new Date();
          dateAndTimeNow = JSON.stringify(dateAndTimeNow);
    console.log(dateAndTimeNow);

    

    const InSertBookInfo = await databaseModels.bookingInfosDB.create({
        fullName:name,
        email:email,
        phoneNumber:phonenumber,
        appointmentType:appointmenttype,
        appointmentAddress:address,
        appointmentDate:date,
        appointmentTime:time,
        timeAndDateBooked: dateAndTimeNow,





    }); 

    

    res.redirect("/");




  }catch(err){
    console.log(err);
  }

   

}


/*  from dashboard */








let resetCounter = async function(req,res) {
  /*
  const readNoti =await databaseModels.notiDB.findAll({
    attributes: ['number'],
  }
  ) ;
console.log({readNoti},0);
  console.log(JSON.stringify(readNoti));

if((!readNoti===null)){
  

}
*/

//counter++;

var data = counter;
console.log("from home control");
console.log(data);
res.json(data);





}

/* post resetcounter post request here to reset the counter */
const resetCounterPost = async function (req,res){
  //const readNoti = await databaseModels.notiDB.findAll() ;
  
   counter = 0 ;
   res.redirect("/dashboard");
}

/* from dashboard */




const homepageControls = {

    homepageGet,homepagePostBookingInfo,resetCounterPost,resetCounter
}


export {homepageControls}