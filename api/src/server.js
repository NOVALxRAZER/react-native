import 'dotenv/config'
import express from 'express'

const app = express()

app.get('/api/health', (req, res) => {
    res.json({ message: 'Success' })
})

export default app
