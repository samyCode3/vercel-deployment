import { IApiResponse } from "../interface/response.interface";

export class ApiResponseFactory {
    static ApiResponse<T> (success : Boolean, status : number, message: string, body: T): IApiResponse<T> {
        return {
            success,
            status,
            message,
            body
        }
    }
}

