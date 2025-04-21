// plugins/repositories.ts
import { createRepositories } from '~/utils/repositories'

export default defineNuxtPlugin({
    setup() {
        console.log('✅ Nuxt plugin loaded: $api is being set up')

        const api = $fetch.create({
            baseURL: useRuntimeConfig().public.baseUrl + "/api/",
            onRequest({ request, options }) {
                console.log(`📡 [API REQUEST] ${options.method || 'GET'} ${options.baseURL}${request}`)
            }
        })

        const repositories = createRepositories(api)

        return {
            provide: {
                api,
                repositories
            }
        }
    }
})
