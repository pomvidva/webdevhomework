import express from "express";
const app = express();




app.get("/", (req,res) =>{
    res.render("index.ejs", {
        type: "weekday",
        advice: "rest",
    });
});


