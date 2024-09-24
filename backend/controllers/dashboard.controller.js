//import { WebSocketServer, WebSocket } from "ws";
import { databaseModels } from "../models/sequelize.js"
import { homepageControls } from "./homepage.controller.js";




//initializing websocket

//with the websockets config, the inserting will go through the homepage contoller and the recieving will be done here


const dashboard = async function(req,res){

   
   if(req.isAuthenticated()){ 

  //socket here and try to listen here
try{
      //admin page here, with books display
console.log("welcome")
//res.send("Admin page logged in success")

const displayBookings = await databaseModels.bookingInfosDB.findAll();
   /*
const [result] = await databaseModels.mysql2.query(
    "SELECT * FROM `bookingInfos`;"

);
*/
for (let a = 0; a < displayBookings.length; a++) {
    console.log(displayBookings[a].fullName);
    
  }
   res.locals.logout =` <div class="logout"> <a href="/admin/logout" style="text-decoration:none"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f9629f"><path d="M182.67-98.67q-33.73 0-58.87-25.13-25.13-25.14-25.13-58.87v-594.66q0-33.73 25.13-58.87 25.14-25.13 58.87-25.13h296.66v84H182.67v594.66h296.66v84H182.67ZM652-270l-60.67-61.33 107.34-107.34H356v-84h341.33L590-630l60.67-60 210.66 210.67L652-270Z"/></svg></a></div>` ;
  res.locals.bookingInfo = displayBookings;
res.render("dashboard")

}catch(err){
    console.log(err);
}

}else {
  res.redirect("/admin");
}





 
}

let counter = 0;






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

counter++;

var data = counter;

console.log(data);
res.json(data);





}

/* post resetcounter post request here to reset the counter */
const resetCounterPost = async function (req,res){
  //const readNoti = await databaseModels.notiDB.findAll() ;
  
   counter = 0 ;
   res.redirect("/dashboard");
}
//admin crud here 

const deleteBooking = async function(req,res){
//delete booking here

try{
  const ID = req.params.id;
  console.log("here id is " + ID);
const deleteBookDB = await databaseModels.bookingInfosDB.destroy({where:{id :ID}});
console.log("booking deleted successfully");

res.redirect("/dashboard");







}catch(err){
  console.log(err);
}
}

const getOneBooking = async function(req,res){

//have one booking here to display
try{

  const ID = req.params.id;
  console.log(ID);

  const oneBookInfo = await databaseModels.bookingInfosDB.findByPk(ID);
console.log(oneBookInfo);
console.log(oneBookInfo.email);
   
  let html = ` 
  <style> 
  .container-fluid{
  border: 8px solid #F9629F;
  padding: 3px;
  margin-top: 5rem;
  
  }



  .two-buttons{

       
      .btn{
       display:inline-block !important;
      background-color:#F9629f;
      color:black;
     
      
      }
    
      span{

      display:inline-block !important;
      
      }

  span button a {
  text-decoration:none;
  }
  
  
  }
  </style>
  <div    class="container-fluid" hx-swap="outerHTML"  >
    
  
  
  <div class="align-items-center text-center" >
  <h3 class="text-center" >Booking Info</h3> <br>
  <label><span>${oneBookInfo.fullName} </span></label> <br>
  <label><span>   ${oneBookInfo.email}</span></label> <br>
  <label><span>  ${oneBookInfo.phoneNumber}</span></label> <br>
  



   <label><span> ${oneBookInfo.appointmentType}</span></label> <br>
  <label><span> ${oneBookInfo.appointmentAddress}</span></label> <br>
  <label><span> ${oneBookInfo.appointmentDate}</span></label> <br>
  <label><span>  ${oneBookInfo.appointmentTime}</span></label> <br>
  <label><span>  ${oneBookInfo.timeAndDateBooked}</span></label> <br>
  
  
  
  
  </div>
  
 <div class="two-buttons text-center">

 <span>
 <form  action="/dashboard/delete/${oneBookInfo.id}" method="post">
<button class="btn" type="submit" value="${oneBookInfo.id}">DELETE </>
</form>
 
 </span>
 <span>
 <button class="btn"><a href="/dashboard" style="color:black !important;">  CANCEL </a></button>
 
 </span>
  
    
 </div>

</div>
`;

res.send(html);
 
  


   


}catch(err){
  console.log(err);
}

}




const dashboardControls = {
    dashboard,resetCounter,resetCounterPost,deleteBooking,getOneBooking

}

export default{counter};
export  {dashboardControls};