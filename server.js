var app = require('express')();
const bodyParser = require('body-parser');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);
    io.emit('request', req.body.message_to_all);
    res.send('Mensagem enviada a todos os seres');
});

io.on('connection', function(socket){
    console.log('um novo ser se conectou');
});

http.listen(8000, 'localhost', function(){
  console.log('listening socket on port 8000');
});

app.listen(3333, () => { 
    console.log('listening express on port 3333')
});

