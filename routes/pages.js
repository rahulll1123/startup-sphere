import express from "express";
const route = express.Router();
const __dirname = import.meta.dirname;
import { Startup } from "../models/startup_data.js";
import path from 'path'
import { connectdbs } from "../connection.js";
import { addstartuptodbs } from "../controllers/functions.js";

connectdbs();

route.post('/submit', addstartuptodbs);

route.get('/:page', (req, res) => {
    res.sendFile(path.join(__dirname,'..','/pages',req.params.page))
})



export default route;