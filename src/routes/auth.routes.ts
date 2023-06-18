import express from 'express'

export const authRoutes = express()

authRoutes.get('/healthCheck', (req, res) => {
    return res.send("working")
})
