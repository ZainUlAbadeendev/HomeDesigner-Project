const nodemailer = require("nodemailer");

const sendMail = async (options) =>{
    const  transporter = nodemailer.createTransport({
        host:process.env.SMPt_Host,
        port: process.env.SMPT_Port,
        services: process.env.SMPT_SERVICES,
        auth:{
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD,
        },

    });

    const mailOptions ={
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: option.message,
    };
    
    await transporter.sendMail(mailOptions);
};

modules.exports = sendMail;
