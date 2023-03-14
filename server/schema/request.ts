import { Request } from 'express'

export interface LatLng {
  lat: number
  lng: number
}

export interface CarUpdate extends LatLng {
  id: string
}

export interface CarCreate {
  name: string
  coordinates: LatLng
}

export interface CustomRequest<T> extends Request {
  body: T
}
