import { DataTypes } from "sequelize";
import { sequelizeConnect } from "./db/db.js";


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

})
export {adminLoginsDB};