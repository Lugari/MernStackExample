/**
 * Basic JSON Response for controller
 */
export type BasicResponse = {
  message: string
}

export type GoodbyeResponse = {
  message: string
  date: Date
}

/**
 * Error JSON Response for controller
 */

export type ErrorResponse = {
    error: string,
    message: string
  }
