import { Router } from 'express'

import { CategoriesRepository } from '../repositories/categoriesRepository'

const categorieRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categorieRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const categoryAlreadyExists = categoriesRepository.findbyname(name)
    if (categoryAlreadyExists) {
        return response.status(401).json({ error: 'This category alread exist' })
    }

    categoriesRepository.create({ name, description })

    return response.status(201).send()
})

categorieRoutes.get('/', (request, response) => {
    const all = categoriesRepository.list()
    response.status(201).json(all)
})

export { categorieRoutes }
