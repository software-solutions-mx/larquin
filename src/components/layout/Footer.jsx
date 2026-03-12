import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col md={4} className="mb-4 mb-md-0">
            <img
              src="/logotipo-larquin-extendido-m6LwPrKMgKuwo13v.png"
              style={{ maxWidth: '205px', height: 'auto' }}
              className="mb-3"
              alt="Construcción Americana Larquin"
            />
            <p className="footer-text">
              Más de 20 años construyendo hogares de calidad al estilo americano en Delicias, Chihuahua.
            </p>
            <div className="social-links mt-3">
              <a href="https://wa.me/526391294600" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="mailto:contacto@construccionamericanalarquin.com" className="social-link">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title mb-3">Navegación</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </Col>

          <Col md={4} id="contacto">
            <h5 className="footer-title mb-3">Contacto</h5>
            <ul className="footer-contact list-unstyled">
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                Carretera Delicias-Meoqui Km 2<br />
                <span className="ms-4">Cd. Delicias, Chihuahua</span>
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:6391294600">639 129 4600</a>
              </li>
              <li>
                <i className="bi bi-whatsapp me-2"></i>
                <a href="https://wa.me/526391294600" target="_blank" rel="noopener noreferrer">
                  WhatsApp: 639 129 4600
                </a>
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:contacto@construccionamericanalarquin.com">
                  contacto@construccionamericanalarquin.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="border-top pt-4">
          <Col className="text-center">
            <p className="footer-copyright mb-0">
              &copy; {new Date().getFullYear()} Construcción Americana Larquin. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
