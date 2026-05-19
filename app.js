import express from "express";
import "dotenv/config";
import plantRoutes from "./routes/plantRoutes.js";

const app = express();

app.set('view engine' , 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}))
app.use(express.json({ limit: "10mb" }));
app.use("/", plantRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});