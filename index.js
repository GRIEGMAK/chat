const express = require('express')

const app = express()

app.get("/url", (req, res) => {
    res.send({method:"GET"})
    }
)

app.listen(4000, () => {
    console.log("server is listening")
})
