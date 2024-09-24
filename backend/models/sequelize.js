import { Sequelize,DataTypes } from "sequelize";
import mysql from 'mysql2/promise';



/*   mysql2     */

const mysql2 = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bookingapp",
  password: "",
});


/*   mysql2     */
const sequelizeConnect = new Sequelize(process.env.SEQUELIZEDATABASE,process.env.SEQUELIZEUSER,process.env.SEQUELIZEPASSWORD,{host:process.env.SEQUELIZEHOST,
  dialect:"mysql",
  port:2405,
})


/*   mysql2     */
/*
const sequelizeConnect = new Sequelize(
    process.env.SEQUELIZEDATABASE,
    process.env.SEQUELIZEUSER,
    process.env.SEQUELIZEPASSWORD,
    {
        host:process.env.SEQUELIZEHOST,
        port: 2405,
        dialect:"mysql"
    }
);

*/


//verifying if db works

try {
    await sequelizeConnect.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }



  const adminLoginsDB = sequelizeConnect.define("adminlogins",{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNUll:false,
        primaryKey:true,
    },
    username:{
        type:DataTypes.STRING,
        allowNUll:false,

    },
    password:{
        type:DataTypes.STRING,
        allowNUll:false,
    }

});


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
        type:DataTypes.DATEONLY,
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
    
    
    
    
    
    });
    
  const notiDB = sequelizeConnect.define("notiNum",{
    id:{type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    number:{
        type:DataTypes.INTEGER,
    }

  });

  await sequelizeConnect.sync({ alter: true });


  const databaseModels = {

    adminLoginsDB,bookingInfosDB,mysql2,notiDB

  }
  export {databaseModels} ;