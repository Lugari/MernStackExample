import { Get, Query, Route, Tags } from 'tsoa'
import { BasicResponse } from './types'
import { IHelloController } from './interfaces'
import { LogSuccess } from '../utils/logger'

@Route('/api/hello')
@Tags('HelloController')
export class HelloController implements IHelloController {
  /**
   * Endopoint to retreive a message "Hello {name}"
   * @param name { string } name of user to be greeted
   * @returns { BasicResponse }Promise BasicResponse
   */
  public async getMessage (name?: string): Promise<BasicResponse> {
    LogSuccess('[/api/hello] Get Request')

    return {
      message: `Hello ${name || 'world'}`
    }
  }
}
