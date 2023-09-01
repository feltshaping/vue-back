const http = require('http');
let users = [{ id: 0, name: 'finally' },{ id: 1, name: 'again' },{id:2,name:'sunxmaz'},{id:3,name:'zhangxw'},{id:4,name:'gingko'},{id:5,name:'plum'}];
let server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users));
  } else {
    res.end('Not found!');
  }
});
server.listen(3000, () => {
  console.log('api start in 3000');
});
