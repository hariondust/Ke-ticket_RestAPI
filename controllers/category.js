const models = require('../models')
const Category = models.categories

exports.selectAll = (req, res) => {
    Category.findAll()
    .then(categories => res.send(categories))
    .catch(err => res.send(err))
  }