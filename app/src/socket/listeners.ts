import { socketEvents } from './socketEvents'
import { Car } from '@interfaces'
import { Socket } from './initial'

type Callback<T> = (data: T) => void

export const socket = {
  initial: (callback: Callback<Car[]>) =>
    Socket.on(socketEvents.initial, callback),

  newMarker: (callback: Callback<Car>) =>
    Socket.on(socketEvents.new_marker, callback),

  updateMarker: (callback: Callback<{ id: string }>) =>
    Socket.on(socketEvents.update_marker, callback),

  deleteMarker: (callback: Callback<{ id: string }>) =>
    Socket.on(socketEvents.delete_marker, callback)
}
