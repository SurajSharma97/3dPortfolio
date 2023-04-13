import { User } from "../models/user.js";
import  Jwt  from "jsonwebtoken";




export const isAuthenticated = async(req,res,next)=>{
    try{
    const {token } = req.cookies;
    if(!token){
        return res.status(400).json({
            success:false,
            message:"login to access this resource"
        });
    }    
    const decoded= Jwt.verify(token, process.env.jwt_Secret);
    const user= await User.findById(decoded._id);
    req.user=user;
    next();
}
catch(error){
return res.status(400).json({
    success:false,
    message:error.message,
});
}};