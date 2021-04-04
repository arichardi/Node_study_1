import { v4 as uuid } from 'uuid'

class specification {
    id?: string;
    name: string;
    description: string;
    create_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export default specification
