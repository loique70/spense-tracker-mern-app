const model = require('../models/model.js')
const transactionController = require('./transactionController')
const categoriesController = require('./categoriesController')

const get_labels = async(req, res) =>{
    model.Transaction.aggregate([
        {
            $lookup:{
                from: "categories",
                localField: 'type',
                foreignField:'type',
                as:'categories_info'
            }
        },
        {
            $unwind:"$categories_info"
        }
    ]).then(result =>{
        let data = result.map(v => Object.assign({},{ _id:v._id, name: v.name, type:v.type, amount:v.amount, color: v.categories_info['color']}))
        res.json(data)
    }).catch(err =>{
        res.status(400).json('Lookup collection error')
    })
}

module.exports = {get_labels}