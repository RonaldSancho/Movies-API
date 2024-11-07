import sql from "mssql"

const dbSettings = {
    user: "sa",
    password: "motitimo2002",
    server: "localhost",
    database: "Nodejs",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
}

export async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch(error){
        console.error(error)
    }
}

export {sql}
// getConnection(); PARA PROBAR CONEXIÓN