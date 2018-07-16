var http = require('http');
var fs = require('fs');//引入文件读取模块
var WebSocket = require('ws');

var WebSocketServer = WebSocket.Server;
var input;
var path = '../www/new.mp4';
var i = 0 ;
var flag = false;
var area = [],len;
var socketServer = new WebSocketServer({
    port:8300
})
console.log('服务器开启成功');

socketServer.on('error',function(err){
    console.log(err)
})

var input = fs.createReadStream(path);

input.on('data', function(data) {
    console.log(typeof data);
    area[i] = data;
    i++;
});

input.on('end', function() {
    console.log(area)  ;
    console.log(area.length);
});

socketServer.on('connection',function(ws){
    var j =0;
    ws.on('message',function(ms){
        if(ms === "on"){
            if(j<area.length){
                console.log("第"+j+"次发送数据："+area[j].length);
                ws.send(area[j]);
                j++;
            } else{ ws.send("end");}
           
        }
    })   
    console.log("长连建立！")
})

