const { MongoClient } = require('mongodb')

if (global.db === undefined) {
    global.db = new MongoClient(process.env.MONGO_URL)
}

module.exports = {
    async connect() {
        if (!db.isConnected())
            await db.connect()
    }


}