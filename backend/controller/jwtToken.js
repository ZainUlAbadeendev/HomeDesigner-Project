//create token and saving in cookies

const sendTojen = (user, statusCOde, res) =>{
   const token = user.getjwtToken();

   //options for cookies

   const options ={
    expires: new Date(Date.now() + 90 * 24 * 60 * 1000),
    httpOnly : true,

   };

   res.status(statusCode).cookie("token" , token, options).json({
    success: true,
    user,
    token,

   });

   module.exports = sendToken;


}