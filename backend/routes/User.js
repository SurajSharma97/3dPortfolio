import  Express  from "express";
import { addProject,
     addTimeline,
      contact,
       deleteProject,
        deleteTimeline,
         getUser,
          login,
           logout,
           myprofile,
           updateUser } from "../controller/User.js";
import {isAuthenticated} from "../middleware/Auth.js"
export const userRouter =Express.Router();
userRouter.route("/").post(login)
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated,myprofile);
userRouter.route("/admin/update").put(isAuthenticated,updateUser);
userRouter.route("/admin/timeline/add").post(isAuthenticated,addTimeline);
userRouter.route("/admin/project/add").post(isAuthenticated,addProject);
userRouter.route("/admin/project/:id").delete(isAuthenticated,deleteProject);
userRouter.route("/admin/timeline/:id").delete(isAuthenticated,deleteTimeline);
userRouter.route("/contact").post(contact);
