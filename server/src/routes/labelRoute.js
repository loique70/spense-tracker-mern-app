const express = require('express')
const router = express.Router()
const labelController = require('../controller/lableControler')
router.route("/")
    .get(labelController.get_labels)


module.exports = router 