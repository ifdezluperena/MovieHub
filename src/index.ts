import app from "./server";
import config from "./config/config";
import connect from "./db/connection";

//podemos pasarle el host, que es un parametro opcional, sino definimos nada se asigna el localHost por defecto

//tambien podemos especificar el backlog, que especificara el tamaño de cola o las conexiones que pudieran llegar a este servidor

connect().then(async function onServerStart(){

    console.log('Connected to detabase')

    app.listen(config.app.PORT, () =>{
    
        console.log(`Server is running on port ${config.app.PORT}`)
        
    });
})




