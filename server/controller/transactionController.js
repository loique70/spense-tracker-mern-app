const model = require('../models/model.js')

const create_transaction = async(req, res) =>{
    if(!req.body) return res.status(400).json('Post HTTP Data not Provided')
    let {name, type, amount } = req.body

    const create = new model.Transaction({
        name,
        type,
        amount,
        date: new Date()
    })

    create.save((err) => {
        if(!err) return res.json(create)
        return res.status(400).json({message: `Error while creating transaction ${err}`})
    })
}

const get_transaction = async(req,res) =>{
    let data = await model.Transaction.find({})

    res.json(data)
}

const delete_transaction = async(req, res) =>{
    if(!req.body) return res.status(400).json({message: 'Request body not Found'})
    await model.Transaction.deleteOne(req.body, (err) =>{
        if(!err) res.json('Record deleted...!')
    }).clone().catch((err) =>{
        res.json("Error while deleting Transaction Record")
    })
}
module.exports = {
    create_transaction,
    get_transaction,
    delete_transaction
}