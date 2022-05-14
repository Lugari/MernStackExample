import dotenv from 'dotenv'
import server from './src/server'
import { LogError, LogSuccess } from './src/utils/logger'

//  configuration the .env file
dotenv.config()
const port: string | number = process.env.PORT || 8000

//  Excute server and listen port
server.listen(port, () => {
  LogSuccess(`[SERVER ON]: running in http://localhost:${port}/api`)
})

// Server error control

server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`)
})
