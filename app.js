const http = require("http");
const {readFile, writeFile} = require("fs").promises;

const server = http.createServer( async (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (req.url === "/" || req.url === "/home") {
        const contents = await readFile("./content/first.txt");
        res.end(contents);
    }
    else if (req.url === "/about") {
        res.end("About page");
    }
    else {
        res.end("Error 404: page not found");
    }
} )

server.listen(5000);
