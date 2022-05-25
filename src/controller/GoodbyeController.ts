import { Get, Query, Route, Tags } from 'tsoa'
import { GoodbyeResponse } from './types'
import { IGoodbyeController } from './interfaces'
import { LogSuccess } from '../utils/logger'

@Route('/api/goodbye')
@Tags('GoodbyeController')
export class GoodbyeController implements IGoodbyeController {
  /**
   * Endpoint to retreive a Goodbye message "Goodbye [name]"
   * @Param name { String | undefined } name of user to say goodbye
   * @returns { GoodbyeResponse } promise Goodbye Response
   */
  @Get('/')
  public async getMessage (@Query()name?: string): Promise<GoodbyeResponse> {
    LogSuccess('[/api/goodbye] Get request')
    return {
      message: `Goodbye ${name || 'world!'}`,
      date: new Date()
    }
  }
}
