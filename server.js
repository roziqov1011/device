const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const arr = [
    {
        id:1,
        name: 'olma',
        price: 10
    },
    {
        id:2,
        name: 'behi',
        price: 10
    },
    {
        id:3,
        name: 'Anor',
        price: 10
    },
    {
        id:4,
        name: 'uzum',
        price: 10
    },
]
app.get('/', (req,res)=>{
    console.log(req.rawHeaders);

    res.send(req.rawHeaders)
})
app.post('/', (req,res)=>{
    console.log(req.body);
    arr.push(req.body)
    res.send(arr)
})

app.listen(9000, console.log(9000))