const express = require('express')
const imageRouter = require('./image/router')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRouter = require('./auth/router')
const userRouter = require('./user/router')

const port = process.env.PORT || 4000
const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const bodyParserMiddleware = bodyParser()
app.use(bodyParserMiddleware)

app.use(imageRouter)
app.use(authRouter)
app.use(userRouter)



app.listen(port, () => console.log(`listening on port ${port}`))