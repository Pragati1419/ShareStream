import DBConnection from "./database/db.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import router from "./routes/routes.js";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

app.use(cors());
app.use('/', router);

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});