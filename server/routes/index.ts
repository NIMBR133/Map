import { Router } from 'express'

import { carRoutes } from './car'
import { carSimulationRoutes } from './car-simulation'

const router = Router()

router.use('/car', carRoutes)
router.use('/car-simulation/', carSimulationRoutes)

export default router
