import express from "express";
const app = express()
const port = 3000
// const port = process.env.PORT || 4000;
const __dirname = import.meta.dirname;
import mongoose from "mongoose";
const conn = await mongoose.connect("mongodb+srv://raj902121raj:rahulpandit123@database.ox2us.mongodb.net/")

import { Startup } from "./models/startup_data.js";



app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})
app.get('/pages/:page', (req, res) => {
  res.sendFile(__dirname + `/pages/${req.params.page}`)
})

app.post('/submit', async (req, res) => {
  console.log("its a post request")
  const recieved_data = req.body
  // console.log(recieved_data)

  const newstartup = new Startup(recieved_data);
  newstartup.save()

  res.sendFile('pages/redirect.html', { root: __dirname })
})

app.post('/loadcard', async (req, res) => {
  let temp = await Startup.find({});
  // console.log(temp)
  res.send(temp)
})
app.post('/find', async (req, res) => {
  // console.log(req.body);
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
})
app.listen(port, () =>
  console.log(`Example app listening on port ${port}`)
)