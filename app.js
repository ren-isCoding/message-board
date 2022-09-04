const express = require("express")
const messageRouter = require("./routes/messages")
const app = express()

app.set("view engine", "ejs")

app.use("/messages", messageRouter)

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(3000)
