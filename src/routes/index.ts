import express from 'express'
import { authRoutes } from './auth.routes'

export const IndexRoutes = express()

IndexRoutes.use('/auth', authRoutes)

