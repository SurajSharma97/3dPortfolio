import  Express  from "express";
import cookieParser from "cookie-parser";


export const app = Express();

app.use(Express.json({limit:"50mb"}));
app.use(cookieParser());

app.use(Express.urlencoded({
    extended:true,limit:"50mb",
}));



app.post("/hello",(req,res)=>{
    res.send("hello world");
    console.log("ye kaam kar rha  hai")
})

import {userRouter} from "./routes/User.js";


app.use("/api/v1", userRouter);