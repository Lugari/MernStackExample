/**
 * Root Router
 * Redirection to Routes
 */

import express, { Request, Response } from 'express'
import helloRouter from './HelloRouter'
import { LogInfo } from '@/utils/logger'
// Server instance

const server = express()

// router instance

const rootRouter = express.Router()

// activate for request to http://localhost:port/api

rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('Get http://localhost:8000/api')
  res.send('API ROUTE (Mongoose - Express - Reactjs - Nodejs)')
})

// Redirection to routes and controllers

server.use('/', rootRouter) // Control http://localhost:port/api
server.use('/hello', helloRouter) // Control http://localhost:port/api/hello

export default server