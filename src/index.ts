import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})