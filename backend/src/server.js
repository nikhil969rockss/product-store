import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/db.js";
import productRoute from "./routes/productRoute.js"
import cors from "cors";
import path from 'path'
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const URI = process.env.MONOG_DB_URI;
const __dirname = path.resolve()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}));


app.use("/api/v1", productRoute);
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/dist')))
  app.get("/{*splat}", (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  )
  
}

dbConnection(URI, () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
