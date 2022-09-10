const express = require("express")
const Message = require("./../models/message")
const router = express.Router()

router.get("/new", (req, res) => {
  res.render("new-message")
})

router.post("/", async (req, res) => {
  let message = new Message({
    text: req.body.text,
    user: req.body.user,
    date: req.body.date,
  })
  try {
    message = await message.save()
    res.redirect("/")
  } catch (e) {
    res.redirect("messages/new")
  }
})

module.exports = router
