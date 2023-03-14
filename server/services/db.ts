import mongoose from 'mongoose'
import { Server } from 'socket.io'
import { socketEvents } from './../../app/src/socket/socketEvents'

export const mongooseConnect = async () => {
  await mongoose.connect(
    `mongodb+srv://cars-app:${process.env.PASSWORD_MONGODB}@cluster.he2gr9w.mongodb.net/test`
  )
}

const connection = mongoose.connection

export const mongooseListeners = (io: Server) => {
  connection.once('open', () => {
    console.log('MongoDB database connected')

    const thoughtChangeStream = connection.collection('cars').watch()

    thoughtChangeStream.on('change', change => {
      switch (change.operationType) {
        case 'update':
          io.emit(socketEvents.update_marker, {
            id: change.documentKey._id,
            coordinates: change.updateDescription.updatedFields.coordinates
          })
          break

        case 'insert':
          io.emit(socketEvents.new_marker, {
            id: change.fullDocument._id,
            name: change.fullDocument.name,
            coordinates: change.fullDocument.coordinates
          })
          break

        case 'delete': {
          io.emit(socketEvents.delete_marker, {
            id: change.documentKey._id
          })
          break
        }
      }
    })
  })
}
