import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <Container className="hero-content">
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="text-white">
            <h1 className="hero-title mb-4">
              Construimos Tus Sueños al Estilo Americano
            </h1>
            <p className="hero-subtitle mb-4">
              Más de 20 años de experiencia en construcción residencial de alta calidad.
              Servicio completo <strong>llave en mano</strong> en Delicias, Chihuahua.
            </p>
            <div className="hero-features mb-5">
              <div className="feature-item">
                <i className="bi bi-check-circle-fill me-2"></i>
                <span>20+ Años de Experiencia</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill me-2"></i>
                <span>Especialización en Estilo Americano</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill me-2"></i>
                <span>Servicio Llave en Mano</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Button 
                variant="primary" 
                size="lg" 
                href="#contacto"
                className="me-3 mb-3 btn-hero-primary"
              >
                Solicitar Cotización
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                href="#proyectos"
                className="mb-3 btn-hero-secondary"
              >
                Ver Proyectos
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
