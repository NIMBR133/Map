import { Router } from 'express'
import { carController } from '../controllers'

const carRoutes = Router()

carRoutes
  .route('/')
  .get(carController.get)
  .post(carController.post)
  .patch(carController.patch)

carRoutes.route('/:id').delete(carController.delete)

export { carRoutes }
