const express = require('express')

const router = express.Router()
const {home, register} = require('./Controller/authController')

router.route('/').get(home)
router.route('/register').post(register)

// router.get("/", (req,res) => {
//     res.status(200).send('hellow')
// })

// router.route("/").get((req,res) => {
//     res.status(200).send('routing with route')
// })

module.exports = router