import { ApiResponseFactory } from "../utils/static"
import { Resource} from "../utils/resources"
import { IUser } from "../interface/user.interface"
import { User } from "../model/user.model"


const Response = ApiResponseFactory.ApiResponse
export class  AuthService{
    // constructor(private resources: Resource ) {}
    private readonly user = User
    async createService (payload: IUser) {
        const {email} = payload
        // await this.resources.beforeCreate({email})
        const user = await this.user.create({...payload}) 
        const response = Response(true, 201, "Account was created", user)
        return response
    } 

    async get () {
        const user = await this.user.findAll()
        if(user.length === 0) { throw {ok : false, status: 404, message : "No user yet found"}}
        return { ok: true, status: 200,message : "Record was retrived",body : {user}}
    }
}

