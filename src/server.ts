import express from 'express'

import { categorieRoutes } from './routes/categories.routes'

const app = express()

app.use(express.json())
app.use('/categories', categorieRoutes)

app.get('/', (request, response) => {
    response.json({ Message: 'Hello WOrld' })
})

app.listen(3333, () => console.log('Server is running'))
