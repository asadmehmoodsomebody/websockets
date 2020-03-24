var hello = require ('path')
var process = require('process');
var data = require('http');
var data2 = require('express');
console.log(__filename);
console.log(hello.basename(__filename));
console.log(process.argv);
console.log(data.METHODS);
console.log(data2.name);
// data.get('/',function(e){
//     console.log(e);
// });
var server = data.createServer(function(e,f){
    console.log('server');
    f.writeHead(200,{'Content-Type':'text/html'});
    // f.write('hello','UTF8',function(es){
    //     console.log('some error');
    // })
    f.end('<h1>Hello</h1>');
});
server.listen('5000');
