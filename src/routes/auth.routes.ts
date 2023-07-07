import express, {Request, Response, NextFunction } from 'express'
import { AuthController } from '../controller/auth.controller'
import { AuthService } from '../service/auth.service'
const authService = new AuthService()
const auth = new AuthController(authService)
export const authRoutes = express()

authRoutes.post('/create', async (req: Request, res: Response, next: NextFunction) => {
   await auth.createUser(req, res, next)
})

authRoutes.get('/', async (req: Request, res: Response, next: NextFunction) => {
    await auth.get(req, res, next)
})