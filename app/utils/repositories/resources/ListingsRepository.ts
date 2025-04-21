// utils/repositories/ListingsRepository.ts
export class ListingsRepository {
    constructor(private fetch: any) {}
    async get() {
        return await this.fetch('listings')
    }
}
