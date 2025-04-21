// utils/repositories/ChannelsRepository.ts

export class ChannelsRepository {
    constructor(private fetch: any) {}
    async get() {
        return await this.fetch('channels')
    }
}
