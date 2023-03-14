import { Schema, model } from 'mongoose'

export interface CarInterface {
  name: string
  coordinates: {
    lng: number
    lat: number
  }
}

const carSchema = new Schema<CarInterface>({
  name: { type: String, required: true },
  coordinates: {
    lng: { type: Number, required: true },
    lat: { type: Number, required: true }
  }
})

carSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

carSchema.set('toJSON', {
  virtuals: true
})

export default model<CarInterface>('Car', carSchema)
