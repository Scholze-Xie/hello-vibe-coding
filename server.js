const http = require('http');

const PORT = 3400;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>hello, ai coding</title>
</head>
<body>
  <h1>hello, ai coding</h1>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
