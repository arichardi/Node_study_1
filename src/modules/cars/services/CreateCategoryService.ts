import { CategoriesRepository } from '../repositories/categoriesRepository'

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {

    }

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findbyname(name)
        if (categoryAlreadyExists) {
            throw new Error('Category alread exists')
        }

        this.categoriesRepository.create({ name, description })
    }
}

export default CreateCategoryService
