import express from "express";

const app = express();
const port = 3000;

function nigger(req, res, next){
  console.log(req.url);
  next();
}

app.use(nigger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
