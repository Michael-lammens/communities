// utils/repositories/index.ts
import { ChannelsRepository } from './resources/ChannelsRepository'
import { ListingsRepository } from './resources/ListingsRepository'

export const createRepositories = (fetch: any) => {
    return {
        channels: new ChannelsRepository(fetch),
        listings: new ListingsRepository(fetch),
    }
}
export type Repositories = ReturnType<typeof createRepositories>
