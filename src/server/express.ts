import express from 'express'
import  cors from 'cors'
import { Config } from '../config/config'
import { IndexRoutes } from '../routes'
import { sequelize } from '../config/database'

const configs = new Config
const PORT = configs.PORT
const app = express()
app.use(express.json())
app.use(cors())
export const Connections = async () =>  {

//    await sequelize.sync(({ alter : false}))
//     .then(async () => {
//         console.log("Database Connected")
//     }).catch(() => {
//         console.log("Database not connected")
//     })
    app.get('/', (req, res) => {
                   console.log("Happy Coding")
                   return res.send('Happy coding')
               })
               app.use('/api/v1', IndexRoutes)
               app.use('*', (req, res) => {
                   return res.json({ ok: false, status : 404, url : req.url, Ip : req.ip,  message : "Route not found"}
       )        })
               app.listen(PORT, () => {
                   console.log(`Server running on port ${PORT}`) 
               })
         
}

