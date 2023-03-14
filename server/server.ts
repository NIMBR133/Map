import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

import routes from './routes'
import { mongooseConnect, mongooseListeners, socketConnect } from './services'

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/', routes)

const PORT = process.env.PORT || 5002

const start = async () => {
  try {
    await mongooseConnect()

    server.listen(PORT, () => console.log(`Server started on ${PORT}...`))
  } catch (err) {
    console.error(err)
  }
}

socketConnect(io)
mongooseListeners(io)

start()
