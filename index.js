const express = require('express')
const imageRouter = require('./image/router')

const port = process.env.PORT || 4000

const app = express()
app.use(imageRouter)


app.listen(port, () => console.log(`listening on port ${port}`))