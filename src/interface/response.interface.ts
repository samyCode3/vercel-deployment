export interface IApiResponse<T> {
    success : Boolean,
    status: number,
    message : string,
    body? : T 
}