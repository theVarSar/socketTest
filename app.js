const express = require('express')
const app = express();
// const server = require('http').createServer(app);

app.use(express.static('views'))
const socket = require('socket.io')



var server = app.listen(4000, ()=> {
    console.log("Server running at 4000");
})

var io = socket(server);
io.on('connection', (socket) => {
    console.log("User Connected =>>>> " + socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
})

// const socket = require('socket.io')(server, { cors: {origin: '*'} })

// app.use(express.json());
// app.set('view engine', 'ejs');

// const checkIfPedro = function(req, res, next) {
//     let name = req.body.name
//     if (name == 'Pedro'){
//         // alert('No.')
//         res.json({error:'No.'})
//     } else {
//         next()
//     }
// }

// app.use((req, res, next) => {
//     console.log('middleware called');
//     next();
// });

// app.get('/home', (req, res) => {
//     res.render('home');
// })
// app.get('/', (req, res)=>{
//     res.json({message: 'Hello world'});
// });
// app.post('/', checkIfPedro, (req, res)=>{
//     res.send({message: 'You are logged in'});
// });