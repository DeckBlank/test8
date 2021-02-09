import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

const http = express();
http.use(express.json())
const PORT = process.env.PORT||8080

const server = http.listen(PORT,()=>{
    console.log(`Servidor iniciado en ${PORT}`);
})


import api from './routes/api'

http.use('/api',api)