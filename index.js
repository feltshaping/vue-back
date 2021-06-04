const http = require('http');
let users = [
  { id: 1, name: 'sunxm' },
  { id: 2, name: 'zhxw' },
  { id: 3, name: 'hw' },
];
let server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users));
  } else {
    res.end('Not found');
  }
});
server.listen(3000, () => {
  console.log('api start in 3000');
});
