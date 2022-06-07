const express = require('express')
const app =express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const soda = {
    'space coke':{
        'brand' :'Coca-Cola' ,
        'color':  'black',
        'format': '20 fl oz bottle',
        'caffinated': true  , 
        'flavor' : 'delicious' , 
     },
    'pineapple':{
        'brand' :'Jarritos' ,
        'color':  'Yellow',
        'format': '25.4 fl oz bottle',
        'caffinated': false  , 
        'flavor' : 'delicious' , 
    },
    'unknown' :{
        'brand' :'unkown' ,
        'color':  'unkown',
        'format': 'unknown',
        'caffinated': false  , 
        'flavor' : 'unknown' , 

}
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const sodaName = request.params.name.toLowerCase()
    if( soda[sodaName] ){
        response.json(soda[sodaName])
    }else{
        response.json(soda['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`the server is running on port ${PORT}! Better go catch it`)
})