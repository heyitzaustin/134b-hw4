var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/../src/list.html',
  function (err, html) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading list.html');
    }

    //res.writeHead(200);
    //res.end(data);
    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.write(html);  
    res.end();  
  });
}

io.on('connection', function (socket) {
  socket.emit('list', { hello: 'world' });
  //socket.on('my other event', function (data) {
    //console.log(data);
  //});
});