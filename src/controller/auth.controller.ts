import {NextFunction, Request, Response} from 'express'
import { AuthService } from '../service/auth.service'
export class AuthController {
    constructor(private auth : AuthService) {}
    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.auth.createService(req.body)
            return res.status(user.status).json({user})
        } catch (error) {
            next(error)
        }
         
    }

    async get (req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.auth.get()
            return res.status(user.status).json({user})
        } catch (error) {
            next(error)
        }
    }
} 