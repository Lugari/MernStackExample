import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv' // Enviroment variables
import cors from 'cors' // Security
import helmet from 'helmet' // Security

// TODO: HTTPS

import rootRouter from '../routes'

//  configuration the .env file
dotenv.config()

//  Create express api
const server: Express = express()

// Define server to use /api and use root router from routes

server.use(
  '/api',
  rootRouter
)

// Static server

server.use(express.static('public'))

// TODO: MONGOOSE CONNECTION

// SECURITY CONFIG

server.use(helmet())
server.use(cors())

// content type configuration

server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))

// redirections

server.get('/', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default server
