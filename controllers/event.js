const models = require('../models')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Event = models.events
const User = models.users
const Category = models.categories



exports.showEventbyCategory = (req, res) => {
    const parameter = req.params.id
    Event.findAll({
        attributes:['id', 'title',['starttime', 'startTime'], ['endtime', 'endTime'], 'price',  ['desc', 'description'], 'address', ['urlmap', 'urlMaps'], 'image'],
        where: {category_id: parameter},
        include:
        [
            { 
                model: Category, as: "Category"
            },
            {
                model: User, as: "CreatedBy"
            }
        ]
    })
    .then(events => res.send(events))
    .catch(err => res.send(err))
}

exports.showEventbyID = (req, res) => {
    const parameter = req.params.id
    Event.findAll({
        attributes:['id', 'title',['starttime', 'startTime'], ['endtime', 'endTime'], 'price',  ['desc', 'description'], 'address', ['urlmap', 'urlMaps'], 'image'],
        where: {id: parameter},
        include:
        [
            { 
                model: Category, as: "Category"
            },
            {
                model: User, as: "CreatedBy"
            }
        ]
    })
    .then(events => res.send(events))
    .catch(err => res.send(err))
}

exports.addNewEvent = (req, res) => {
    Event.create(req.body)
    .then(event => res.send(event))
    .catch(err => res.send(err))
}


exports.selectAllEvent = (req, res) => {
    Event.findAll({
        include:
        [
            { 
                model: Category, as: "Category"
            },
            {
                model: User, as: "CreatedBy"
            }
        ]
    })
    .then(events => res.send(events))
    .catch(err => res.send(err))
  }

  exports.sortEvent = (req, res) => {
    const parameter = req.params.title
    Event.findAll({
      where: {title: { [Op.like]: `%${parameter}%` }},
      include: [
        {
          model: Category,
          as: "Category",
          attributes: ["id", "name"]
        },
        {
          model: User,
          as: "CreatedBy",
          attributes: ["id", "username", "name", "phone"]
        }
      ],
      limit: 5
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => res.send(err));
  };