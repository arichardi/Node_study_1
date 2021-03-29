import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'Get route ok' })
})

app.listen(3333, () => console.log('Our server is running'))
