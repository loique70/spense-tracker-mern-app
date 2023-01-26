const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//Categories => field => ['type','color']
const categories_model = new Schema({
    type:{type: String, default: "Investment"},
    color:{type:String, default:"#FACC15"}
})

//Transaction => field =>['nama','type','amount','date']
const transaction_model = new Schema({
    name:{type:String, default:"Anonymous"},
    type:{type:String, default:"Anonymous"},
    amount:{type:Number},
    date:{type: Date, default:Date.now}
})

const Categories = mongoose.model('categories', categories_model)
const Transaction = mongoose.model('transaction', transaction_model)

module.exports ={
    Categories,
    Transaction
}