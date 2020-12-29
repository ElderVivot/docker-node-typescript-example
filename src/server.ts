import express, { Request, Response } from 'express'

const app = express()

app.get('/', (request: Request, response: Response) => response.send('Example with Node and Typescript'))

const port = 3330
const host = '0.0.0.0'
app.listen(port, host, () => console.log(`Executing Example NODE with Typescript in Docker at ${port} !`))