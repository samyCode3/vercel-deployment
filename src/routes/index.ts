import express from 'express'
import { authRoutes } from './auth.routes'
import { CustomErrorMiddleware } from '../middleware/error'

export const IndexRoutes = express()

IndexRoutes.use('/auth', authRoutes)
IndexRoutes.use(CustomErrorMiddleware)
