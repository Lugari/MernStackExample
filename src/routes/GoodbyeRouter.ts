import express, { Request, Response } from 'express'
import { GoodbyeController } from '../controller/GoodbyeController'
import { LogInfo } from '../utils/logger'

const GoodbyeRouter = express.Router()

// Get -> http://localhost:port/api/goodbye?name=NameValue/
GoodbyeRouter.route('/')
  .get(async (req:Request, res:Response) => {
    const name: any = req?.query?.name // Obtain a query param
    LogInfo(`Query goodbye Param: ${name} `)
    const controller: GoodbyeController = new GoodbyeController() // Controller instant to execute method
    const response = await controller.getMessage(name)// obtain response
    return res.send(response) // send response to client
  })

export default GoodbyeRouter
