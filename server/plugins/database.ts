// server/plugins/mongoose.ts
import mongoose from 'mongoose'

export default defineNitroPlugin(async () => {
    const config = useRuntimeConfig()
    const DB_OPTIONS = {
        dbName: config.mongoDbName,

    }
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(config.mongoUri, DB_OPTIONS)
        console.log('✅ Mongoose connected')
    }
})
