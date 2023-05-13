const model = require('../models/model.js')

//post : http://localhost:7000/api/categories
const create_categories = (req, res) =>{
    if(!req.body) return res.status(400).json('Post HTTP Data not Provided')
    let {type,color } = req.body
   const Create = new model.Categories({
    type,
    color
   })

   Create.save((err) =>{
    if(!err) return res.json(Create)
    return res.status(400).json({message:`Error while creating categories ${err}`})
   })
}

const get_categorie = async(req,res) =>{
    let data = await model.Categories.find({})

    //That line help us to filter the request
    let filter = await data.map(v => Object.assign({},{type: v.type, color: v.color}))
    return res.json(filter)
}

module.exports ={
    create_categories,
    get_categorie,
}