const http = require('http');

const server = http.createServer((req, res) => {

    const url = new URL(req.url, 'http://localhost');

    console.log("Requested Page:", url.pathname);
    console.log("Selected Category:", url.searchParams.get('category'));
    console.log("Selected Sorting:", url.searchParams.get('sort'));

    res.end("Product details received successfully!");

});

server.listen(3000, () => {
    console.log("Welcome! Server is running on port 3000");
});