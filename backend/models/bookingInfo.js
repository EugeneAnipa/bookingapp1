import { DataTypes } from "sequelize";
import { sequelizeConnect } from "../db/db.js";



const bookingInfosDB = sequelizeConnect.define("bookingInfo",{
id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},
fullName:{
    type:DataTypes.STRING,
    allowNull:false,
},
email : {
    type:DataTypes.STRING,
    allowNull:true,

},
phoneNumber:{
    type:DataTypes.STRING,
    allowNull:true,
},
appointmentType : {
    type:DataTypes.STRING,
    allowNull:true,
},
appointmentAddress : {
    type:DataTypes.STRING,
    allowNull:true,
},
appointmentDate : {
    type:DataTypes.DATE,
    allowNull:true,
},
appointmentTime : {
    type:DataTypes.TIME,
    allowNull:true,
},
timeAndDateBooked :{
    type:DataTypes.STRING,
    allowNull:false,
}





})


//await sequelizeConnect.sync({ alter: true });'

export  {bookingInfosDB};