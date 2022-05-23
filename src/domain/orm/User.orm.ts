import { userEntity } from '../entities/User.entity.ts'

import { LogSuccess, LogError } from '@/utils/logger'

// CRUD
/**
 * Function to obtain all users from Collection "Users" in mongo server
 */

export const GetAllUsers = async () => {
  try {
    const userModel = userEntity()
    return await userModel.find({ isDelete: false })
    // eslint-disable-next-line no-unreachable
    LogSuccess('Users found')
  } catch (error) {
    LogError(`[ORM ERROR]: Getting all users: ${error}`)
  }
}

// TODO:
// Get user & by ID by Email
// Delete user by ID
// Create new user
// Update user by ID
