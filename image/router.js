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

imageRouter.post(
  '/image',
  (request, response, next) => {
    Image.create(request.body)
      .then(image => response.json(image))
      .catch(next)
  }
)

module.exports = imageRouter