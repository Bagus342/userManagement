import express from 'express'
import cors from 'cors'

import routes from './routes/index.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req, res) => {
    res.status(200).json({ message: 'ok' })
})

app.use('/api', routes)

export default app
