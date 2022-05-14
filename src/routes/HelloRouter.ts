import express, { Request, Response } from 'express'
import { HelloController } from '@/controller/HelloController'
import { LogInfo } from '@/utils/logger'

// Router from express

const helloRouter = express.Router()

// Get -> http://localhost:port/api/hello?name=Lucas/
helloRouter.route('/')
  .get(async (req:Request, res:Response) => {
    const name: any = req?.query?.name // Obtain a query param
    LogInfo(`Query Param: ${name}`)
    const controller: HelloController = new HelloController() // Controller instant to execute method
    const response = await controller.getMessage(name)// obtain response
    return res.send(response) // send response to client
  })

// Export hello router

export default helloRouter
