import { Car } from '../schema'
import { randomCalcNewCoordinates, updateCoordinatesDb } from '../utils'
import { Controller } from './interfaces'

type Methods = 'start' | 'stop'

let timerId: NodeJS.Timer

export const carSimulationController: Controller<Methods> = {
  start: async (req, res) => {
    timerId = setInterval(async () => {
      const cars = await Car.find({})

      cars.forEach(car => {
        const { lat, lng } = randomCalcNewCoordinates(car)
        updateCoordinatesDb({ id: car.id, lat, lng })
      })
    }, 3000)

    res.send('Success')
  },

  stop: async (req, res) => {
    stopSimulation()
    res.send('Success')
  }
}

export const stopSimulation = () => {
  clearInterval(timerId)
}
