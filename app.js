// Imports
const express = require("express")
const messageRouter = require("./routes/messages")

const app = express()
const port = 3000

// Static Files
app.use(express.static("public"))

// Set Template Engine
app.set("view engine", "ejs")

app.use("/messages", messageRouter)

app.get("/", (req, res) => {
  const messages = [
    {
      text: "Hi there!",
      user: "Renato",
      added: new Date(),
    },
    {
      text: "Hello World!",
      user: "Mark",
      added: new Date(),
    },
  ]
  res.render("index", { messages: messages })
})

app.listen(port)
