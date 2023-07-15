const express = require('express') 
const path = require('path') 
const { fileURLToPath } = require('url') 
const { dirname } = require('path') ;
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(require( './routes/index.js'))

app.use(express.static('build'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});  



app.listen(3000, ()=>{
    console.log('Servidor iniciado')
})