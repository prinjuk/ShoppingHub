
const http= require('http');
const app=require('./app');


const port=process.env.PORT || 3000;


app.set('port',port);
const server=http.createServer(app);
// server.on("error",error);
// server.on("listening",onlistening);
server.listen(port);
console.log(port);

