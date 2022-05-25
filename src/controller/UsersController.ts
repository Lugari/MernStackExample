/* eslint-disable no-unused-vars */
import { Get, Route, Tags, Query, Delete, Post, Put } from 'tsoa'
import { IUsersController } from './interfaces'
import { BasicResponse } from './types'
import { LogSuccess, LogError, LogWarning } from '../utils/logger'

// ORM - Users collection
import { GetAllUsers, FindUsersByID, DeleteUserByID, CreateUser, UpdateUser } from '../domain/orm/User.orm'

@Route('/api/users')
@Tags('UserController')

export class UserController implements IUsersController {
/**
 * Endpoint to retrieve the  users in the collection of the DB
 * @Params {string} id ID of user to be retrieved
 * @return All users or user found by id
 */
 @Get('/')
  public async getUsers (@Query() id?: string): Promise<any | undefined> {
    let response: any = ''
    if (id) {
      LogSuccess(`[/api/users]: Get ${id} user request`)
      response = await FindUsersByID(id)
    } else {
      LogSuccess('[/api/users]: Get all users request')
      response = await GetAllUsers()
    }
    return response
  }
  /**
 * Endpoint to delet the  usern by id of the DB
 * @Params {string} id ID of user to be delete
 * @return message info
 */

  @Delete('/')
 public async deleteUser (@Query() id?: string): Promise<any> {
   let response: any = ''
   if (id) {
     LogSuccess(`[/api/users]: Delete ${id} user request`)
     response = await DeleteUserByID(id)
     return { message: `User ${id} was deleted succesfully` }
   } else {
     LogWarning('[/api/users]: Delete user by ID request without id')
     response = {
       message: 'Please, provide a valid user ID'
     }
   }
   return response
 }
 /**
 * Endpoint to retrieve the  users in the collection of the DB
 * @Params {string} id ID of user to be retrieved
 * @return All users or user found by id
 */

 @Post('/')
  public async createUser (@Query() user:any): Promise<any> {
    let response: any = ''
    if (user.email) {
      await CreateUser(user).then((r) => {
        LogSuccess(`[/api/users]: creating user request ${user.name}`)
        response = { message: `User ${user.name} was created succesfully` }
      })
    } else {
      response = { message: 'invalid user, please provide a valid user to create' }
    }
    return response
  }

  @Put('/')
 public async updateUser (@Query() user:any, id:string): Promise<any> {
   let response: any = ''
   if (id) {
     await UpdateUser(user, id).then((r) => {
       LogSuccess(`[/api/users]: Updating user ${id} request ${user}`)
       response = { message: `User ${user} was updated succesfully` }
     })
   } else {
     response = { message: 'Please provide a valid user id to update' }
   }
   return response
 }
}
