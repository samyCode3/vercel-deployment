import { ApiResponseFactory } from '../utils/static'
import { IUser } from '../interface/user.interface'
import {User} from '../model/user.model'

const Response = ApiResponseFactory.ApiResponse
export class BaseAuth {
    protected user : typeof User
    constructor (user : typeof User) {
          this.user = user
    }

    protected async create (payload: IUser) {
      const user = await this.user.create({...payload})
      const response = Response(true, 201, "Account was created", user)
      return response

    }
}
