import { IUser } from '../interface/user.interface'
import {User} from '../model/user.model'
export class Resource {
    private readonly user = User
     
    async beforeCreate(payload: any) {
      const user = await this.user.findOne({where : {email: payload}})
      if(user){ throw {success: false, status : 400, message : "Dupliacate email not allowed"} }
    }
}