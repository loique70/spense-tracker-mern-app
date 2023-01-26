const express = require('express')
const router = express.Router()
const transaction = require('../controller/transactionController')

router.route('/')
    .post(transaction.create_transaction)
    .get(transaction.get_transaction)
    .delete(transaction.delete_transaction)
module.exports = router