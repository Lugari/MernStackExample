import { BasicResponse } from '../types'

export interface IHelloController{
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodbyeController{
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IUsersController{
    // Read all users from db || get one user by id
    getUsers(id?: string): Promise<any>
    // Delete user by id
    deleteUser(id: string): Promise<any>
    // Create new user
    createUser(user:any): Promise <any>
    // update an user by id
    updateUser(user:any, id:string): Promise <any>
}
