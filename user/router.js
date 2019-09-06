const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')

const userRouter = new Router()

userRouter.post(
  '/user',
  (request, response, next) => {
    const user = {
      email: request.body.email,
      password: bcrypt.hashSync(request.body.password, 10)
    }
    User.create(user)
      .then(user => response.json(user))
      .catch(next)
  }
)

module.exports = userRouter
