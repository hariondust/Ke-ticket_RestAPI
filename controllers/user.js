const jwt = require('jsonwebtoken')
const models = require('../models')
const user = models.users

exports.showProfilebyID = (req, res) => {
    const parameter = req.params.id
    user.findAll({
        where: {id: parameter},
        attributes:['id','name','phone','email','image']
    })
    .then(user => res.send(user))
    .catch(err => res.send(err))
}

exports.register = (req, res) => {
    user.create(req.body)
    .then(user => {
        const token = jwt.sign({ id: user.id }, 'Tester');
        const username = user.username;
        const id = user.id;
        const name = user.name;
        res.send ({
            message: "Success!",
            id,
            username,
            name,
            token,
        });
    })
    .catch(err => res.send(err))
};
