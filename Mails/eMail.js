import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './eMail.css'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function EnvioDeMail() {
    const [email,setEmail]=useState('');
    const [tamaño_propiedad,setTamaño_propiedad]=useState('');
    const [nombre,setNombre]=useState('');
    const [apellido,setApellido]=useState('');
    const [domicilio,setDomicilio]=useState('');
    const [telefono,setTelefono]=useState('');
    const [descripcion, setDescripcion]= useState('');
    console.log(descripcion)

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('emailRegistrado',email)
        localStorage.setItem('tamaño_propiedadRegistrado',tamaño_propiedad)
        localStorage.setItem('apellidoRegistrado',apellido)
        localStorage.setItem('nombreRegistrado',nombre)
        localStorage.setItem('domicilioRegistrado',domicilio)
        localStorage.setItem('telefonoRegistrado',telefono)

        alert("Registro Existoso")


    }
    


  return (
    <body className="body_Registro">
      <div className="grid-layaut-registro">
        <div className="contein_registro">
          <h1>Registro</h1>
          <Form className="frmRegistro" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Ingrese su Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(ev) => {
                    setEmail(ev.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Ingrese el tamaño de su propiedad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Metros Cuadrados"
                  value={tamaño_propiedad}
                  onChange={(ev) => {
                    setTamaño_propiedad(ev.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Juan"
                  value={nombre}
                  onChange={(ev) => {
                    setNombre(ev.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Perez"
                  value={apellido}
                  onChange={(ev) => {
                    setApellido(ev.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Domicilio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Domicilio"
                  value={domicilio}
                  onChange={(ev) => {
                    setDomicilio(ev.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Telefono"
                  value={telefono}
                  onChange={(ev) => {
                    setTelefono(ev.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Descripcion">
              <Form.Control
                className='txtarea'
                as="textarea"
                style={{ height: "100px" }}
                value={descripcion}
                  onChange={(ev) => {
                    setDescripcion(ev.target.value);
                  }}
              />
            </FloatingLabel>

            {/* <Link to="/login"> */}
            <Button className="btn_Registro" type="submit">
              Guardar
            </Button>
            {/* </Link> */}
          </Form>
        </div>
      </div>
    </body>
  );
}