import  express from 'express'
import  cors from 'cors'
import { Config } from '../config/config'

const configs = new Config
const PORT = configs.PORT

export class Connections {
  public app 
  constructor() {
     this.app = express()
     this.app.use(express.json({limit : "50mb"}))
     this.app.use(cors())
     this.loadConnection()
  }

   private async loadConnection () {
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
  }
}
