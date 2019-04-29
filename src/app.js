import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import helloRouter from './route/helloRoute'
import byeRouter from './route/byeRoute'
import defaultRouter from './route/defaultRoute'
import catalogRouter from './route/catalogRoute'

import mongoose from 'mongoose';

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', defaultRouter)
app.use('/hello', helloRouter)
app.use('/bye', byeRouter)
app.use('/catalog', catalogRouter)

const mongoDB = 'mongodb://localhost:27017/local_library';
mongoose.connect(mongoDB, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default app