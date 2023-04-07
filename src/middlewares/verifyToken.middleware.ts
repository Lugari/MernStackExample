// eslint-disable-next-line no-unused-vars
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

/**
 * @param req Original request previous middleware of verification JWT
 * @param res Response of verification of JWT
 * @param next Next function  to be executed
 * @returns Errors of verification or next function
 */
export const verfyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token']

  if (!token) {
    return res.status(403).send({
      authentication: 'Missing jwt in request',
      message: 'Not authorized to consume this endpoint'
    })
  }
  // verify the token obtained

  jwt.verify(token, '', (err:any, decoded: any) => {
    if (err) {
      return res.status(500).send({
        authentication: 'JWT verification failed',
        message: 'failed to verify JWT token in request'
      })
    }

    next()
  })
}
