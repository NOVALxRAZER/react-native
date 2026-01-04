import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/api/health', (req, res) => {
    res.json({ message: 'Success' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
