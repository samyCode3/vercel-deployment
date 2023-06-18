import  express from 'express'
import  cors from 'cors'
import { Config } from '../config/config'
import { IndexRoutes } from '../routes'

const configs = new Config
const PORT = configs.PORT

export class Connections {
  public app 
  constructor() {
     this.app = express()
     this.app.use(express.json({limit : "50mb"}))
     this.app.use(cors)
     this.loadConnection()
  }

   private async loadConnection () {
      
        this.app.get('/', (req, res) => {
            return res.send('Happy coding')
        })
        this.app.use('/api/v1', IndexRoutes)
        this.app.use('*', (req, res) => {
            return res.json({
                ok: false,
                status : 404,
                url : req.url,
                Ip : req.ip,
                message : "Route not found"
            }
)        })
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
  }
}
