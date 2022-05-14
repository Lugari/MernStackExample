import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

//  configuration the .env file
dotenv.config()

//  Create express api
const app: Express = express()
const port: string | number = process.env.PORT || 8000

//  Define first route app
app.get('/', (req: Request, res: Response) => {
  res.send('(Mongoose - Express - Reactjs - Nodejs)')
})

app.get('/hello/:name', (req: Request, res: Response) => {
  res.send(`Hola ${req.params.name}... \n (Mongoose - Express - Reactjs - Nodejs)`)
})

app.get('/data', (req: Request, res: Response) => {
  res.send({
    message: 'Goodbye, world'
  })
})

//  Excute app and listen port
app.listen(port, () => console.log(`Express Server running at port http://localhost:${port}`))
