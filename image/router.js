const { Router } = require('express')
const Image = require('./model')

const imageRouter = new Router()

imageRouter.get(
  '/image',
  (request, response, next) => {
    Image.findAll()
      .then(listofImages => response.send(listofImages))
      .catch(next)
  }
)

module.exports = imageRouter