import express from "express";
import cors from 'cors';
import router from "./api";
import {connectDB} from "./utils";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

connectDB();

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
