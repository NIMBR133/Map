import { Car, CarInterface, CarUpdate } from '../schema'

export const updateCoordinatesDb = async ({ id, lat, lng }: CarUpdate) => {
  const car = await Car.findOne({
    _id: id
  })

  car.coordinates = { lat, lng }

  await car.save()

  return car
}

export const randomCalcNewCoordinates = (car: CarInterface) => {
  const { lat, lng } = car.coordinates

  const randomNumber = Math.random()
  const randomValue = randomNumber / 100

  let newLat: number, newLng: number
  if (randomNumber > 0.75) {
    newLat = lat - randomValue
    newLng = lng - randomValue
  } else if (randomNumber > 0.5) {
    newLat = lat - randomValue
    newLng = lng + randomValue
  } else if (randomNumber > 0.25) {
    newLat = lat + randomValue
    newLng = lng - randomValue
  } else {
    newLat = lat + randomValue
    newLng = lng + randomValue
  }

  return { lat: newLat, lng: newLng }
}
