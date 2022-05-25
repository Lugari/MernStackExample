import { userEntity } from '../entities/User.entity'

import { LogError } from '../../utils/logger'

// CRUD
/**
 * Function to obtain all users from Collection "Users" in mongo server
 */

export const GetAllUsers = async () => {
  try {
    const userModel = userEntity()
    return await userModel.find({ isDelete: false })
  } catch (error) {
    LogError(`[ORM ERROR]: Getting all users: ${error}`)
  }
}
// Get user & by ID

export const FindUsersByID = async (id: string): Promise<any | undefined> => {
  try {
    const userModel = userEntity()
    return await userModel.findById(id)
  } catch (error) {
    LogError(`[ORM ERROR]: Getting user: ${error}`)
  }
}
// Delete user by ID

export const DeleteUserByID = async (id:string): Promise<any> => {
  try {
    const userModel = userEntity()
    return await userModel.findByIdAndDelete(id)
  } catch (error) {
    LogError(`[ORM ERROR]: Delete user: ${error}`)
  }
}

// Create new user

export const CreateUser = async (user:any): Promise<any> => {
  try {
    const userModel = userEntity()
    return await userModel.create(user)
  } catch (error) {
    LogError(`[ORM ERROR]: Creating user: ${error}`)
  }
}

// Update user by ID
export const UpdateUser = async (user:any, id:string): Promise<any> => {
  try {
    const userModel = userEntity()
    return await userModel.findByIdAndUpdate(id, user)
  } catch (error) {
    LogError(`[ORM ERROR]: Updating user ${id}: ${error}`)
  }
}

// TODO:
// Get user by Email
