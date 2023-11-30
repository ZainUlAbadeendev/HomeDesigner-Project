const app = require("./app");




// handling uncaught Excaption
process.on("uncaughtException",(err)  => {
console.log('Error : ${err.message}');
console.log('shutting down the server for handling uncaught exception');

})

/config
if(process.env.NODE_ENV !== "PRODUCTION"){
require("dotenv").config({
    path:"backend/config/.env"
})
}

//creating server
const server =app.listen(process.env.PORT,() => {
    console.log('server is running on http://localhost:${process.eventNames.PORT}')
})

// unhandled  promise rejection
process.on("unhandledRejection", (err) => {
 console.log('shutting down the server for ${err.message}');
 console.log('shutting down the server for unhandle promise rejection');

 server.close(() =>{
    process.exit(1);
 });
})