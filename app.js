const http = require('http');
const os = require('OS');
console.log("Kubia server starting ... ");
var handler= function (request, response) {
    console.log("Rece i ved request from" + request.connection.remoteAddress);
    response.writeHead(200);
    response.end("You ' ve hit" + os.hostname() + "\n");
};
var www=http.createServer(handler);
www.listen(8080);