import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let postslist = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {postslist: postslist});
  });

app.get("/write", (req,res) =>{
    res.render("write.ejs");
});

app.post('/write', function(req, res){
    const blog = {
      topic: req.body["blogtopic"],
      content: req.body["blogcontent"],
    };
    postslist.push(blog);
    //add
    console.log(postslist);
  
    res.redirect('/');
  });

app.get("/blog/:blogtopic", (req,res) => {
  for (var i = 0; i < postslist.length; i++){
    if (req.params.blogtopic === postslist[i].topic){
      console.log("yea")
      res.render("blog.ejs", {blogtopic: postslist[i].topic, blogcontent: postslist[i].content });
    }
  }
});

//delete feature

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });