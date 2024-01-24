import express from "express";
const app = express()
const port = 3000

app.get("/", (re, res) => {
    res.send("Hello, World")
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
    console.log('Teting the branch')
})