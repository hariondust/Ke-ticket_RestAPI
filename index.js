require('express-group-routes')
//Init Body parser
const bodyParser = require('body-parser')
//instantiate express module
const express = require('express')
// use express in app variable
const app = express()
//define the server port
const port = 5000

const AuthControllers = require('./controllers/auth')
const CategoryControllers = require('./controllers/category')
const EventControllers = require('./controllers/event')
const UserControllers = require('./controllers/user')
const OrderControllers = require('./controllers/order')

//allow this app to receive incoming json request
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.group("/api/v1", (router) =>{
  // routing for SHOW event by category - number 2
  router.get('/category/:id/events', EventControllers.showEventbyCategory)
  // routing for SHOW all category - number 1
  router.get('/categories', CategoryControllers.selectAll)
  // routing for SHOW all event 
  router.get('/events', EventControllers.selectAllEvent)
  // routing for SHOW event by Id - number 6
  router.get('/event/:id', EventControllers.showEventbyID)
  // routing for SHOW profile by Id - number 7 
  router.get('/profile/:id', UserControllers.showProfilebyID)
  // routing for POST new event - number 10
  router.post('/event/add', EventControllers.addNewEvent)
  // routing SHOW order with approved status - number 9
  router.get('/orders', OrderControllers.showApproved)
  // routing for logging in - number 3
  router.post('/login', AuthControllers.postLogin)
  // routing for UPDATE order - number 8
  router.put('/order/:id', OrderControllers.updateStatus)
  // routing for POST new account (register)
  router.post('/register', UserControllers.register)
  // routing for POST new order
  router.post('/order/add', OrderControllers.addOrder)
  // routing for SHOW payment
  router.get('/payment/:id', OrderControllers.showPayment)
  // routing for SHOW ticket
  router.get('/ticket/:id', OrderControllers.showTicketApproved)
  // routing for UPDATE confirm
  router.put('/status/:id', OrderControllers.updateConfirmed)
  // routing for UPDATE approve
  router.put('/approve/:id', OrderControllers.updateApproved)
  // routing for SHOW event by inpu
  router.get('/event/:title/search', EventControllers.sortEvent)

})  


//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))
