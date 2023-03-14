export interface Car {
  id?: string
  name: string
  coordinates: {
    lng: number
    lat: number
  }
}

export interface LngLat {
  lng: string
  lat: string
}
