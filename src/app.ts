import express from 'express'
import router from './interface/routes/userRoutes'

const app = express()

app.use(express.json())

// Exemplo de rota para usuários
app.use('/', router)

export default app
