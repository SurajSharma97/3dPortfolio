import {app} from "./app.js"
import dotenv from "dotenv"
import {connectDatabase} from "./config/database.js"
import cloudinary from "cloudinary";



dotenv.config({path:"./backend/config/config.env"})

connectDatabase();
const cloud = cloudinary.v2.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.Cloud_Apikey,
    api_secret: process.env.Cloud_Api_Secret,
})
console.log(cloud)

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on :http://localhost:${process.env.PORT}`)
});