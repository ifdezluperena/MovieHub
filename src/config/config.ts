import dotenv from 'dotenv'

dotenv.config()

type TConfig = {
    [key: string]: EnviromentConfig
}

type EnviromentConfig = {
    app: AppConfig
    db : MongodbConfig

}

type AppConfig = {

    PORT : string | number
}

type MongodbConfig = {

    URI : string 
}

const ENV: string = process.env.NODE_ENV ?? 'development' 


const CONFIG :TConfig = {
    development : {
        app : {
            PORT:process.env.PORT || 4001
        },
        db : {
            URI: process.env.MONGO_DB_URI || 'mongodb://localhost:27017/express'
        }
    },
    production : {
        app : {
            PORT:process.env.PORT || 4002
        },
        db : {
            URI: process.env.MONGO_DB_URI || 'mongodb://localhost:27017/express'
        }
    }
}

export default CONFIG[ENV]