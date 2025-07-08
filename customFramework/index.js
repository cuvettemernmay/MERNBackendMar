const http = require('http');

class MiniFamework {
    constructor() {
        this.routes = {}; // { GET: { '/': [handler1, handler2] } }
    }

    get(path, handler) {
      this.routes[`GET ${path}`] = handler;
    }

    post(path, handler) {
      this.routes[`POST ${path}`] = handler;
    }

    listen(port, callback) {
      const server = http.createServer((req, res) => {
        const handler = this.routes[`${req.method} ${req.url}`];

        if (handler) {
          handler(req, res);
        } else {
          res.statusCode = 404;
          res.end('Not Found');
        }
      });
      server.listen(port, callback);
    }
}

const app = new MiniFamework();

app.get("/", (req, res) => {
  res.end("Hello from GET /");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

