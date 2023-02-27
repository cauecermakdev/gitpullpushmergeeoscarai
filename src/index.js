import express from "express";
import cors from "cors";
import route from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
/// testeeee

app.use(route);



//lalallalal
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
