const fs = require('fs');
var ct = Date.now().toString() + "\r\n";
function  time(){
    fs.appendFile('./currentTime', ct)
}

setInterval(time,1000);

