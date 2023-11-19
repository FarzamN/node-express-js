const express = require("express");
const route = require("./auth");
const app = express();

app.use(express.json());
app.use("/api/auth", route);

// app.get('/',(req,res) => {
//     res.status(200).send('"message": hellow')
// });

// app.get('/about', (req,res) => {
//     res.send('hellow form about')
// })
// app.get('/contact', (req,res) => {
//     res.send('hellow form contact')
// })
// app.get('/temp', (req,res) => {
//     res.send('hellow form temp')
// })

const port = 8000;
app.listen(port, () => {
  console.log(`listning ${port}`);
});
