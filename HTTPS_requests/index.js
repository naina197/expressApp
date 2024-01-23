import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1> Home Page </h1>")
})

app.get("/about", (req, res) =>{
    res.send("<h1> About Me </h1><p> My name is Naina </p>")
})

app.get("/contact", (req, res) =>{
    res.send("<h1> Contact Me </h1><p> 098733211</p>")
} )

app.listen(port, () => {
    console.log(`Port running on the server ${port}`)
})