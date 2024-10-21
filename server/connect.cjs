const {MongoClient} = require("mongodb")
require("dotenv").config({path: "./config.env"})

async function main(){
    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)

    try{
        await client.connect()

        const collections = await client.db("ShoyoEnterprisePrototype").collections()
        collections.forEach((collections) => console.log(collections.s.namespace.collection))  
    } catch (e) {
        console.error(e.message)
    }finally{
        await client.close()
    }

}

main()