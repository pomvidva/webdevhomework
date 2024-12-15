const fs = require("fs");

fs.writeFile("message.txt", "Hello node js", (err) => {
    if (err) throw err;
    console.log("the file has been saved");
});