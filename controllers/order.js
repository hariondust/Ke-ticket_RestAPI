const models = require('../models')
const Category = models.categories
const Event = models.events
const User = models.users
const Order = models.orders 
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.showApproved = (req, res) => {
    Order.findAll({
        include: 
        [
            {
                model: Event, as: "Event", include:
                [
                    {
                        model: Category, as: "Category"
                    },
                    {
                        model: User, as: "CreatedBy"
                    },
                ],
            },
        ]
    })
    .then(order => res.send(order))
    .catch(err => res.send(err))
}

exports.updateStatus = (req, res) => {
    const data = req.body
    const parameter = req.params.id
    Order.update(
        status="confirmed",
        {where: {id: parameter}}
    )
    .then (order => res.send({message:"Update Success", order}))
    .catch (err => res.send(err))
}

exports.addOrder = (req, res) => {
    Order.create(req.body)
    .then(order => {
        res.send(order)})
    .catch(err => res.send(err))
}

exports.showPayment = (req, res) => {
    const parameter = req.params.id
    Order.findAll({
        where: {buyer_id: parameter, status: {[Op.or]: ["confirmed", "pending"]}},
        include: 
        [
            {
                model: Event, as: "Event", include:
                [
                    {
                        model: Category, as: "Category"
                    },
                    {
                        model: User, as: "CreatedBy"
                    },
                ],
            },
        ]
    })
    .then(order => res.send(order))
    .catch(err => res.send(err))
}

exports.showTicketApproved = (req, res) => {
    const parameter = req.params.id
    Order.findAll({
        where: {buyer_id: parameter, status: "approved"},
        include: 
        [
            {
                model: Event, as: "Event", include:
                [
                    {
                        model: Category, as: "Category"
                    },
                    {
                        model: User, as: "CreatedBy"
                    },
                ],
            },
        ]
    })
    .then(order => res.send(order))
    .catch(err => res.send(err))
}

exports.updateConfirmed = (req, res) => {
    const parameter = req.params.id
    Order.update({
        status: "confirmed"
    },
    {
        where: {id: parameter}
    })
    .then(order => {
        res.send(order)})
    .catch(err => res.send(err))
}

exports.updateApproved = (req, res) => {
    const parameter = req.params.id
    Order.update({
        status: "approved"
    },
    {
        where: {id: parameter}
    })
    .then(order => {
        res.send(order)})
    .catch(err => res.send(err))
}