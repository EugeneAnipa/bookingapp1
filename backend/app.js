

import "dotenv/config";

import express from "express";

import fs from "node:fs";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

import session from "express-session";
import { MemoryStore } from "express-session";
import passport from "passport";
import nocache from "nocache";
import path from "path";






const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.set("view engine", "ejs");
app.set("views", "../frontend/views");


app.use(express.static(path.join("../frontend/" + "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var accessLogStream = fs.createWriteStream((__dirname, "access.log"), {
    flags: "a",
  });
  app.use(morgan("combined", { stream: accessLogStream }));
  

//session
//Session
app.use(
  session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    //saveUninitialized: false,
    store: new MemoryStore({
      checkPeriod:500 * 60 * 60,
    }),
    cookie: {
      maxAge: 500 * 60 * 60,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(nocache());

/*      websocket   */
/*
const wss = new WebSocketServer({port:8080});

wss.on("message",function message(data){
  console.log(data)

})

*/




/*   websocket    */


//session
import { homepageRouter } from "./routes/homepage.routes.js";
import { adminRouter } from "./routes/adminpage.routes.js";
import { dashRouter } from "./routes/dashboard.routes.js";


app.use("/",homepageRouter);
app.use("/admin",adminRouter);
app.use("/dashboard",dashRouter);
//console.log(homepageRouter);








 



//initialize the websocket



app.listen(8000, () => {
    console.log("server is running on 8000");
  });