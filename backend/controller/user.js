const express = require("express");
const path =require("path");
const User = require("../model/user");
const router = express.Router();
const {upload} = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");
const jwt = require("jasonwebtoken")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const sendToken = require("../utilsjwtToken/")


router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting file" });
        }
      });
      return next(new ErrorHandler("User already exists", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };
      
          
      
        
        return next(new ErrorHandler("User already exists", 400));
      }

      const filename = req.file.filename;
      const fileUrl = path.join(filename);
    

      const user = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl,         
    
      };

 const activationUrl = 'http://localhost:3000/activation/$(activationToken}';
 


      try {
        email: user.email, subject:"activate your account",
        message: 'Hello $(user.name}, please click on the link to activate your account: ${accctivationUrl}',
        const activationToken = createActivationToken(user);
        res.status(201).json((
          sucess: true,
          message: ' please check your email:- ${user.email) to activate your account!'
        ))
      } catch (error) {
        return next(new ErrorHandler(error.message, 400));
      }
      
      // The rest of your code here...
      
// create Activation Token
const CreateActivationToken = (user) =>{
  return jwt.sign(user, process.env.ACTIVATION_SECRET,{
    expiresIn: "5m",

  });

  // active users
router.post("/activation", catchAsyncErrors(async(req, res, next) =>{
try [
  const (activation_token) = req.body;

  const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SCRET);


  if(!newUser){
    return next (new ErrorHandler("invalid token" n 400));

    const {name, email, password, avatar} = newUser;


    sendToken(NewUser, 201,res);


  }
    

    }
   catch(error){

   }
  }
}))
};


module.exports = router;