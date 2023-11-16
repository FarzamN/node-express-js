const express = require('express')

const router = express.Router()

// router.get("/", (req,res) => {
//     res.status(200).send('hellow')
// })

router.route("/").get((req,res) => {
    res.status(200).send('routing with route')
})

module.exports = router