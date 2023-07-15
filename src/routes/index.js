const{ Router } = require( 'express')

const router = Router ();

console.log('entramos al router')

router.post('/sendEmail', (req,res)=>{
    const {email, tamañoPropieda, nombre, apellido, domicilio, telefono,descripcion }= req.body;
    //Problemas con la variable "tamañoPropieda"

    console.log(req.body)

    contentHTML= `
        
    <h1>Nombre: ${nombre} ${apellido}</h1>
    <ul>
      <li>Domicilio: ${domicilio}</li>
      <li>Telefono: ${telefono}</li>
      <li>Email: ${email}</li>
    </ul>
    <p>Informacion Detellada: ${descripcion}</p>
    `
    console.log(contentHTML)

    res.send('Recivido')
})

module.exports= router; 