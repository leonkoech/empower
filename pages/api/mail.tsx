import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    console.log(req.body)
    const message_data = req.body
    const nodemailer = require("nodemailer");

         let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

   
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Leon Foo 👻" <foo@example.com>', // sender address
      to: message_data.email, // list of receivers
      subject: message_data.subject, // Subject line
      text: message_data.message, // plain text body
      html: message_html(message_data), // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}