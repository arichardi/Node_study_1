import express, { response } from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.json({ Message: 'Hello WOrld' })
})

app.listen(3333, () => console.log('Server is running'))
