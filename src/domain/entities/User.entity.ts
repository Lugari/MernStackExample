import mongoose from 'mongoose'
import { IUser } from '../interfaces/IUsers.interface'

export const userEntity = () => {
  // const userSchema = new mongoose.Schema(
  //   {
  //     name: String,
  //     email: String,
  //     age: Number
  //   }
  // )

  const userSchema = new mongoose.Schema<IUser>(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      age: { type: Number, required: true }
    }
  )

  return mongoose.models.Users || mongoose.model<IUser>('Users', userSchema)
}
