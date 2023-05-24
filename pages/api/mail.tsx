import { NextApiRequest, NextApiResponse } from 'next';
import { email } from '../../public/shared/modules/contact';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    console.log(req.body)
    // console.log(process.)
    const message_data = req.body
    const from_email_address = "empowerrecoverycenter00@gmail.com"
    const to_email_address = "info@empowerrc.com"

    const nodemailer = require("nodemailer");

         let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "empowerrecoverycenter00@gmail.com", // generated ethereal user
        pass: process.env.MAIL_API, // generated ethereal password
      },
    });

   
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Empower Website" <${from_email_address}>`, // sender address
      to: to_email_address, // list of receivers
      subject: message_data.subject, // Subject line
      text: message_data.message, // plain text body
      html:  message_data.html_message, // html body
    });
    // try{
    //     sendEmail()
    //     console.log("sent")
        
    // }
    // catch(e){
    //     console.log(e)
    //     console.log("couldn't send")
    // }
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}