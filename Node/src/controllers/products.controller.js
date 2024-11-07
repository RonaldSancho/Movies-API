import { getConnection, sql } from "../database/connection.js"

export const getProducts = async (req, res) => {
    try{
        // res.json('PRODUCTS')PARA PROBAR
        const pool = await getConnection();
        const result = await pool.request().execute("getProducts");
        console.log(result);
        res.json(result.recordset);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const createNewProduct = async (req, res) => {
    
    const {Name, Description} = req.body;
    let { Quantity } = req.body;

    if(Name == null || Description == null) {
        return res.status(400).json({ message: "Bad Request"});
    }

    if( Quantity == null) Quantity = 0;

    try{
        const pool = await getConnection();

        await pool
        .request()
        .input("Name", sql.VarChar, Name)
        .input("Description", sql.VarChar, Description)
        .input("Quantity", sql.Int, Quantity)
        .execute("createNewProduct");
        res.json({Name, Description, Quantity});
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const getProductById = async(req, res) => {
    const {id} = req.params

    try{
        const pool = await getConnection();

        const result = await pool
        .request()
        .input("id",id)
        .execute("getProductById")
        
        res.send(result.recordset[0]);
    }
    catch(error){
        res.status(404);
        res.send(error.message);
    }
} 

// export const getTotalProducts = async (req, res) => {
//     try{
//         // res.json('PRODUCTS')PARA PROBAR
//         const pool = await getConnection();
//         const result = await pool.request().execute("getTotalProducts");
//         res.json(result.recordset[0]['']);
//     }
//     catch(error){
//         res.status(500);
//         res.send(error.message);
//     }
// }

export const deleteProduct = async(req, res) => {
    const {id} = req.params

    try{
        const pool = await getConnection();

        await pool
        .request()
        .input("id",id)
        .execute("deleteProduct")
        
        res.status(204);
    }
    catch(error){
        res.status(404);
        res.send(error.message);
    }
} 

export const updateProductById = async(req, res) => {
    const {Name, Description, Quantity} = req.body;
    const {id} = req.params;

    if(Name == null || Description == null || Quantity == null) {
        return res.status(400).json({ message: "Bad Request"});
    }

    const pool = await getConnection();
    await pool.request()
    .input("Name", sql.VarChar, Name)
    .input("Description", sql.VarChar, Description)
    .input("Quantity", sql.Int, Quantity)
    .input("id", sql.Int, id)
    .execute("updateProductById");

    res.json({Name, Description, Quantity});
}