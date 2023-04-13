import {createTransport} from "nodemailer";
export const sendMail=async (text) => {
     const transporter = createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        auth: {
          user: process.env.SMPT_USER,
          pass: process.env.SMPT_PASS
        },
     });

     await transporter.sendMail({subject:'Contact request from portfolio',
     to:process.env.myMail,
      from:process.env.myMail,
      text});
};