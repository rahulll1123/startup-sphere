import express from 'express'
const __dirname = import.meta.dirname;
import path from 'path'
import { connectdbs } from "../connection.js";
import { Startup } from "../models/startup_data.js";

connectdbs();

async function addstartuptodbs(req, res) {
    console.log("its a post request")
    const recieved_data = req.body

    const newstartup = new Startup(recieved_data);
    newstartup.save()
    
    // res.sendFile(path.join(__dirname, '..', '/pages', 'redirect.html'))
    res.redirect('/')
    
}

async function findfromdbs(req, res) {
    let obj = req.body
    let obj2 = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (element != "") {
                // console.log(key, element);
                obj2[key] = element;
            }
        }
    }

    let temp = await Startup.find(obj2);
    res.send(temp);
}

export { findfromdbs ,addstartuptodbs};
