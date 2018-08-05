var chatService = require("../services/chatService");

module.exports  = function(io){
    
    var users = {};
    io.sockets.on('connection',function(socket){
        //console.log(req);
        //socket.user = req
        //console.log('connection init');
        //console.log(socket);
        socket.emit('init',{ res: 'socket connected!' });
        
        socket.on('send',function(data){
            //console.log(data,socket.userid);
            //io.sockets.emit('receive',{name:socket.user,mess:data.message});
            chatService.addChat({mess: data.message , from_id:socket.userid, to_id:data.from_id },function(res){});
            io.sockets.to(data.id).emit('receive',{name:socket.user,mess:data.message});
        });
        
        
        socket.on('addUser',function(data){
            //console.log(data);
            socket.user = data.name;
            socket.userid = data.id;
            //users.push({name:data.user,id:socket.id});
            users[socket.id] = data ;
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