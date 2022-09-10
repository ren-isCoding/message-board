// Imports
const express = require("express")
const mongoose = require("mongoose")
const Message = require("./models/message")
const messageRouter = require("./routes/messages")

// Config
const app = express()
const port = 3000
mongoose.connect("mongodb://localhost/message-board")

// Static Files
app.use(express.static("public"))

// Set Template Engine
app.set("view engine", "ejs")

// Routers
app.use(express.urlencoded({ extended: false }))
app.use("/messages", messageRouter)

app.get("/", async (req, res) => {
  const messages = await Message.find().sort({ date: "desc" })
  res.render("index", { messages: messages })
})

app.listen(port)
