import { Car } from '@interfaces'
import { createRequest, url } from './config'

export const apiFetch = {
  createCar: (car: Car): Promise<void> =>
    createRequest({
      method: 'POST',
      data: car,
      url: `${url}/car`
    }),

  deleteCar: (id: string): Promise<void> =>
    createRequest({
      method: 'DELETE',
      url: `${url}/car/${id}`
    }),

  startSimulation: (): Promise<void> =>
    createRequest({
      url: `${url}/car-simulation/start`
    }),

  stopSimulation: (): Promise<void> =>
    createRequest({
      url: `${url}/car-simulation/stop`
    })
}
