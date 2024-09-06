import express from "express";
// const port = process.env.PORT || 4000;

import defaultroutes from './routes/default_route.js'
import pages from './routes/pages.js'
import api from './routes/api.js'

import { logreq } from "./middlewares/log.js";

const app = express()
const port = 8000

//middleware
app.use(express.static('public'))
app.use(logreq)

//routes
app.use('/', defaultroutes)
app.use('/pages',pages)
app.use('/api',api)

app.listen(port, () =>
  console.log(`Example app listening on port ${port}`)
)