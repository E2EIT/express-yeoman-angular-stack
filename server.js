var app = require('./app_base');

http.createServer(app).listen(app.get('port'), function(){
   console.log("Express server listening on port " + app.get('port') + ' - ' + app.get('env'));
});