import { Router } from 'express'
import { carSimulationController } from '../controllers'

const carSimulationRoutes = Router()

carSimulationRoutes.route('/start').get(carSimulationController.start)

carSimulationRoutes.route('/stop').get(carSimulationController.stop)

export { carSimulationRoutes }
