import { Car, CarCreate, CarUpdate, CustomRequest } from '../schema'
import { updateCoordinatesDb } from '../utils'
import { Controller } from './interfaces'

type Methods = 'get' | 'post' | 'patch' | 'delete'

export const carController: Controller<Methods> = {
  get: async (req, res) => {
    const cars = await Car.find({})

    res.json(cars)
  },

  post: async (req: CustomRequest<CarCreate>, res) => {
    const { name, coordinates } = req.body

    const car = new Car({
      name,
      coordinates
    })

    await car.save()
    res.json(car)
  },

  patch: async (req: CustomRequest<CarUpdate>, res) => {
    const { id, lat, lng } = req.body

    const updateCar = updateCoordinatesDb({ id, lat, lng })

    res.json(updateCar)
  },

  delete: async (req, res) => {
    const id = req.params.id

    await Car.deleteOne({ id })

    res.json(id)
  }
}
