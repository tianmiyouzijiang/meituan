var gulp = require('gulp');
var webserver = require('gulp-webserver');
var fs = require('fs');
gulp.task('webserver',function() {
    gulp.src('./')
        .pipe(webserver({
            host:'localhost',
            port:'8080',
            middleware:function(req, res,next) {
                res.setHeader('Access-Control-Allow-Origin','*')
                if(req.method === 'GET') {
                    if(req.url === '/') {
                        res.end(fs.readFileSync('index.html'));
                    } else {
                        res.end(fs.readFileSync('data.json'));
                    }
                } else {
                    next();
                }
            }
        }))
})