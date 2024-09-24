import { Sequelize} from "sequelize";
//import mysql from 'mysql2/promise';



/*   mysql2     */

/*
const studentMgtDB = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bookingapp",
  password: "",
});

*/


/*   mysql2     */
const sequelizeConnect = new Sequelize("bookingapp","root","",{host:"localhost",
  dialect:"mysql"
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


  

  await sequelizeConnect.sync({ alter: true });
  export {sequelizeConnect} ;