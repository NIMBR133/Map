import { Server } from 'socket.io'
import { socketEvents } from '../../app/src/socket/socketEvents'
import { stopSimulation } from '../controllers'
import { Car } from '../schema'

export const socketConnect = (io: Server) => {
  io.on('connection', async socket => {
    console.log('Client connected')

    const cars = await Car.find({})
    socket.emit(socketEvents.initial, cars)

    socket.on('disconnect', () => {
      stopSimulation()
      console.log('Client disconnected')
    })
  })
}
