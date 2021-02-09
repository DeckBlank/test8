import express from 'express'
import {productos}  from '../../utils/productos'

const route = express.Router()

route.get('/productos',(req,res)=>{
    res.json(productos.getItems())
})

route.post('/productos',(req,res)=>{
    let body = req.body
    res.json(productos.addItem(body))
})

route.get('/productos/:id',(req,res)=>{
    let id = req.params.id
    res.json(productos.getItemsById(id))
})

module.exports = route;
