
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ICategoriesRepositories {

    create({ name, description }: ICreateSpecificationDTO): void
}

export default ICategoriesRepositories
