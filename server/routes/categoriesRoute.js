const express = require('express')
const routes = express.Router()
const categoriesController = require('../controller/categoriesController.js')

    routes.route('/')
      .post(categoriesController.create_categories)
      .get(categoriesController.get_categorie)

module.exports = routes;    