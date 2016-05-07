var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'KOA Hello World';
});

app.listen(3000);
console.log('Server running on 3000')