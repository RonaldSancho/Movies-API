import express from "express";
import config from "./config.js";
import productsRoutes from "./routes/products.routes.js";

const app = express();

//settings
app.set('port', config.port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(productsRoutes);

export default app