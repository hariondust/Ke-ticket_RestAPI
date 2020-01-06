const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.users

exports.postLogin = (req, res) => {
//check if email and pass match in db tbl user
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({where: {username, password}})
        .then(user => {
            if (user){
                const id = user.id;
                const username = user.username;
                const name = user.name;
                const token = jwt.sign({ id: user.id }, 'Tester');
                res.send({
                    message: "Success!",
                    id,
                    username,
                    name,
                    token,
                    error: false
                })
            } else {
                res.send({
                    error: true,
                    message: "Wrong Email or Password!"
                })
            }
        })
}