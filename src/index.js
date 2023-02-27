import express from "express";
import joi from "joi"
import cors from "cors";
import route from "./routes/index.js";

///lalalala
const app = express();
app.use(express.json());
app.use(cors());
///testeeee

app.use(route);

//lalallalal
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));


export const newCustomerSchema = joi.object({
    name: joi.string().min(3).required(),
    phone: joi.string().alphanum().min(10).max(11).required(),
    cpf: joi.string().alphanum().min(11).max(11).required(),
    birthday: joi.date().required(),
  });

//line just in cal_branch 4

