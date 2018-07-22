var chatService = require("../services/chatService");

module.exports  = function(io){
    
    var users = {};
    io.sockets.on('connection',function(socket){
        
        console.log('connection init');
        //console.log(socket);
        socket.emit('init',{ res: 'socket connected!' });
        
        socket.on('send',function(data){
            console.log(data);
            //io.sockets.emit('receive',{name:socket.user,mess:data.message});
            chatService.addChat({mess: data.message , id:data.id },function(res){});
            io.sockets.to(data.id).emit('receive',{name:socket.user,mess:data.message});
        });
        
        socket.on('addUser',function(data){
            socket.user = data.user;
            //users.push({name:data.user,id:socket.id});
            users[socket.id] = data.user ;
            io.sockets.emit('users',users);
        })
        
        socket.on('disconnect',function(){
            console.log('disconnected called');
            //users.splice(users.indexOf(socket.user),1);
            delete users[socket.id];
            io.sockets.emit('users',users);
        })
    })
    
}