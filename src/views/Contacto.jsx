import "./Contacto.css"
import { useState } from 'react';

const Contacto = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      sendEmail();
    }
  }

  const validateForm = () => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setValidEmail(false);
      return false;
    }
    setValidEmail(true);
    return true;
  }

  const sendEmail = () => {
// Ejemplo: 
// Email.send({
//   Host: "smtp.elasticemail.com",
//   Username: "nombreDeUsuario",
//   Password: "contraseña",
//   To: correoElectronico,
//   From: "remitente@ejemplo.com",
//   Subject: "Envío de formulario de contacto",
//   Body: descripcion
// }).then(
//   message => setEmailSent(true)
// )
    setEmailSent(true);
  }

  return (
    <div class="formContainer">
      <h2>Cuentanos como te podemos ayudar.</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Correo electronico :</label>
          <input type="email" class={`form-control text-center ${!validEmail ? "is-invalid" : ""}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre@correo.com" value={email} onChange={e => setEmail(e.target.value)} />
          <div class={`invalid-feedback ${validEmail ? "d-none" : ""}`}>Por favor ingresa un correo electrónico válido.</div>
          <div class="alert alert-success alert-success-last-letter" role="alert">Nunca compartiremos tu correo electrónico!</div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Descripcion :</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit" class="btn btn-success">Enviar</button>
        {emailSent && <div class="alert alert-success" role="alert">Tu correo electrónico ha sido enviado con éxito.</div>}
      </form>
    </div>
  )
}

export default Contacto;

