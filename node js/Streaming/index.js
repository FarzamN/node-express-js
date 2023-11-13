const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
//   fs.readFile("input.txt", (err, data) => {
//     if (err) return console.log(err);
//     res.end(data.toString());
    
//   });
const read = fs.createReadStream("input.txt");
   /*  read.on("data", (chunkData) => {
      res.write(chunkData);
    });
    read.on("end", () => {
      res.end();
    });
    read.on("error", (err) => {
      console.log(err);
      res.end("file not found");
    }); */
    read.pipe(res)
});

server.listen(8000, "127.0.0.1", (error) => {
  if (error) throw error;
  console.log("Server is running on http://127.0.0.1:8000");
});