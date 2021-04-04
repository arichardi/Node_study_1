import { Category } from '../model/categoriesModel'

interface ICreateRepository {
    name: string,
    description: string,
}

class CategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ name, description }: ICreateRepository): void {
        const category = new Category()
        Object.assign(category, {
            name,
            description,
            create_at: new Date()
        })

        this.categories.push(category)
    }

    list(): Category[] {
        return this.categories
    }

    findbyname(name: string): Category {
        const category = this.categories.find((element) => element.name === name)
        return category
    }
}

export { CategoriesRepository }
