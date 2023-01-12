import { Container } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Home.css'
import cake from './img/cake.png'

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Delicias Cecy</span>
      </h1>
      <img src={cake} alt="Imagen de un pastel" />
    </Container>
  );
};

export default Home;