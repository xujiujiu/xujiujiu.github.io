/**
 * Created by x03771 on 2017/6/29.
 */
var http = require('http');
var fs=require('fs');
var path=require('path');
var url=require('url');
var httpObj = http.createServer(function(request, response){
    var url1 = request.url == '/' ? '/html/index.html': request.url;
    console.log(url1);
    var pathname = __dirname + url1;
    var ext = path.extname(pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(pathname, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(pathname, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    response.writeHead(200, {
                        'Content-Type': "text/plain"
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
httpObj.listen(8888);