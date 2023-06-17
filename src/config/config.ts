import dotEnv from 'dotenv'
dotEnv.config()
export class Config {
   public PORT
   constructor() {
      this.PORT = process.env.PORT
   }  
}