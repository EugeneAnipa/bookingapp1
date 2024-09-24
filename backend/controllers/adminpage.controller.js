

import bcrypt from "bcrypt";

import passport from "passport";
import {Strategy} from "passport-local";


import { databaseModels } from "../models/sequelize.js";

const saltRounds = 10;

//admin login sign ups 

const adminSignUp = async function(req,res) {
    console.log(req.body);
    console.log(req.body.username,req.body.password);
    

try{

   const usernameFinder =await databaseModels.adminLoginsDB.findOne({
    where:{
        username:req.body.username
    }
   });
     

   if(usernameFinder===null){
    await bcrypt.genSalt(saltRounds,function(err,salt){
        salt = bcrypt.genSaltSync(saltRounds);
        bcrypt.hash(req.body.password,salt,function(err,hash){


            //insert into the admin login table hash for password, and username
            const adminLoginStore = databaseModels.adminLoginsDB.create({
                username:req.body.username,
                password:hash
            });
        })
    }) 
   }
}catch(err){
    console.log(err)
}
}

//admin login sign ups 

const userNamePasser = async function(req,res,next) {
   try{ 

  

    console.log(req.user);
    console.log(req.isAuthenticated());

    if (req.isAuthenticated()===true){
        res.redirect("/dashboard")
    }


}catch(err){
    console.log(er)
   }
    
}
/*  */

const passAuth = passport.authenticate("local",{
    successRedirect:"/dashboard",
    failureRedirect:"/admin",
    failureFlash:true,
})


//passport
passport.use(
    new Strategy(

        {

            usernameField:"username",
            passwordField:"password",
            passReqToCallback:true,
        },


        async function  verify(req,user,password,cb){

            try{
                //look for it in db here
                const usernameFinder = await databaseModels.adminLoginsDB.findOne({
                    where:{
                        username:user,
                    }

                });
                console.log(usernameFinder);
                if(usernameFinder ===null){
                    console.log("Username does not exit");
                    return cb(null,false,{
                        message:"Username is incorrect"
                    });
                }else if(!(usernameFinder===null)){
                    const passwordFinder = await databaseModels.adminLoginsDB.findOne({
                        where:{
                            username:user
                        }
                    });
                    console.log(passwordFinder);
                    const foundHash = passwordFinder.password;
                    console.log(foundHash);
                    await bcrypt.compare(password,foundHash,function(err,result){


                        if(result===true){
                            console.log("Correct logins both for username and password")
                            return cb(null,user)
                        }
                        else if(result===false){
                            return cb(null,false,{
                                message:`Incorrect Password`,
                            })
                        }
                    })

                }else{
                    return cb(null,false);
                }


            }catch(err){
                console.log(err)
            }
        } 
        
        



    )
)

//passport













const adminLoginpageGet = async function(req,res,next){

    try{

        //adminlogin page here
     //console.log(req.flash());

     

    console.log(req.method);

    res.render("adminlogin",{ error: req.flash() });
    }catch(err){
    console.log(err);

    }
    
}

const adminLoginpagePost = async function(req,res){
    //adminlogin page here
   
}



const logoutPost = async function (req,res) {
    res.clearCookie("connect.sid");
    req.logout(function(err){
        req.session.destroy(function(err){
            console.log("session destroyed")
        })
        res.redirect("/admin")
    })
    
}

const logoutGet = async function(req,res){
    res.redirect("/admin")
}





//passport

passport.serializeUser((user,cb)=>{
    cb(null,user);
})

passport.deserializeUser((user,cb)=>{
    cb(null,user)
})
//passport





const adminControls = {
    adminLoginpageGet,adminLoginpagePost,passAuth,logoutGet,userNamePasser,logoutPost,adminSignUp
}
export {adminControls};