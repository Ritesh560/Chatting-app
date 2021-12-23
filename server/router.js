const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("server is up and running like a bull")
})

module.exports = router
