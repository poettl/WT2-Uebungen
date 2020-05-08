//import the http module
const http = require('http');

//create a server, with the request and the response as parameters
http.createServer(function(request, response){

    //write a statuscode of 200 into the head ("ok"), and set the content-type to text/plain, so that the browser knows what to do
    response.writeHead(200, {'Content-Type' : 'text/plain'})

    //write a message to the response, which is displayed in the browser
    response.write('Hello from Node Server!');

    //signals the end of the response
    response.end();
}).listen(3000); //makes the server listen to port 3000