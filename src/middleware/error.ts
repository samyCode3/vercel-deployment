import { NextFunction, Response, Request } from "express";

export const CustomErrorMiddleware = (err: any, req: Request, res : Response, next: NextFunction) => {
      if(err.ok === false) {
        return res.status(err.status).json({ok : false, status: err.status, message : err.message})
      }
      if(err.status || 500) {
           return res.status(err.status || 500).json({ok : false, status: err.status || 500, message : err.message})
      } 
}
