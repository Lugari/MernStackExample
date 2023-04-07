import express, { Request, Response } from 'express'
import { UserController } from '../controller/UsersController'
import { LogInfo } from '../utils/logger'

// Router from express

const UsersRouter = express.Router()

// Get -> http://localhost:port/api/users?id=fff
UsersRouter.route('/')
  .get(async (req:Request, res:Response) => {
    const id: any = req?.query?.id // Obtain a query param
    LogInfo(`User Query Param: ${id}`)
    const controller: UserController = new UserController() // Controller instant to execute method
    const response = await controller.getUsers(id)// obtain response
    return res.status(201).send(response) // send response to client
  })

  .delete(async (req: Request, res: Response) => {
    const id: any = req?.query?.id // Obtain a query param
    LogInfo(`User Query Param: ${id}`)
    const controller: UserController = new UserController() // Controller instant to execute method
    const response = await controller.deleteUser(id)// obtain response
    return res.status(202).send(response) // send response to client
  })

  .post(async (req: Request, res: Response) => {
    const name: any = req?.query?.name // Obtain a query param
    const email: any = req?.query?.email
    const age: any = req?.query?.age

    const user = {
      name,
      email,
      age
    }

    LogInfo(`User Query Param: ${user.name}`)
    const controller: UserController = new UserController() // Controller instant to execute method
    const response = await controller.createUser(user)// obtain response
    return res.status(200).send(response) // send response to client
  })

  .put(async (req: Request, res: Response) => {
    const name: any = req?.query?.name // Obtain a query param
    const email: any = req?.query?.email
    const age: any = req?.query?.age
    const id: any = req?.query?.id

    const controller: UserController = new UserController() // Controller instant to execute method
    const user = {
      name,
      email,
      age
    }

    LogInfo(`User Query Param: ${user} & ${id}`)
    const response = await controller.updateUser(user, id)// obtain response
    return res.status(response.status).send(response) // send response to client
  })

// Export hello router
export default UsersRouter
