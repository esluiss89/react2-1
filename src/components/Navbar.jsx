import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./Navbar.css"

export default function Navigation() {
  return (
    <>
      <div class="narbarEstilo">
        <Navbar variant='dark'>
          <Container className='justify-content-around'>
            <div className='justify-content-start'>
              <Link to='/' className='text-dark ms-3 text-decoration-none textsize'>
                <i class="bi bi-house-heart-fill"></i> Home
              </Link>
              <Link to='/contacto' className='text-dark ms-3 text-decoration-none textsize'>
                <i class="bi bi-mailbox2"></i> Contactame
              </Link>
            </div>
            <Navbar.Brand> <span class="logoNav">Pasteles Felices </span><i class="bi bi-cart4"></i></Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  )
}