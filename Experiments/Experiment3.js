const http = require(`http`);

const PORT = 3000;


const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    
    res.statusCode = 200;
    res.setHeader('X-Powered-By', 'Node.js');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the server!');
});


server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
