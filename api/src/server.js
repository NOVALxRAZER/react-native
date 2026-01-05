import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})


app.get('/api/health', (req, res) => {
    res.json({ message: 'Success' })
})

// ⛔ DO NOT listen on a port
export default app
