var socket = require('ws').Server;
var wss = new socket({port:4000});
wss.on('connection',function(e,i){
    e.on('message',function(m){
        console.log(m);
    })

});