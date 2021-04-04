import { Router } from 'express'

import { CategoriesRepository } from '../repositories/categoriesRepository'
import CreateCategoryService from '../services/CreateCategoryService'

const categorieRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categorieRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const createCategoryService = new CreateCategoryService(categoriesRepository)
    createCategoryService.execute({ name, description })

    return response.status(201).send()
})

categorieRoutes.get('/', (request, response) => {
    const all = categoriesRepository.list()
    response.status(201).json(all)
})

export { categorieRoutes }
