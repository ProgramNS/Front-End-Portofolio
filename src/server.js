const express = require('express');
const fs = require('fs');


const port = 8000;
const host = "localhost";


fs.readFile("./index.html", (error,html) => {
    if (error) throw error;
    const server = express()
    const tipe = {
        ".html" : "text/html",
        ".png"  : "image/png",
        ".jpg"  : "image/jpg",
        ".webp"  : "image/webp",
    } 
    const ContentTypeContains = tipe  || "application/octet-stream";
    server.get("/" , (req , res)=> {
        res.writeHeader(200,{"Content-Type": ContentTypeContains});
        res.write(html);
        res.end();
    });
    server.listen(port,host);
    console.log(`Server berjalan pada http://${host}:${port}`)
});

// const express = require('express');
// const path = require('path');
// const server = express();

// server.get("/" , (req,res) => {
//     res.sendFile(path.join(__dirname, "./index.html"));
// })

// const port = process.env.port || 8080;
// server.listen(port ,()=> {
//     console.log(`Running on ${port}`);
// });

