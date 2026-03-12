import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="nosotros" className="about-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="section-title mb-4">Nuestra Filosofía</h2>
            <p className="about-text">
              Creemos que cada proyecto es más que una simple construcción; es la oportunidad 
              de crear un hogar donde las familias pueden crecer, compartir momentos inolvidables 
              y disfrutar de un espacio que refleja sus sueños y estilo de vida.
            </p>
            <p className="about-text">
              Nos comprometemos a trabajar codo a codo con cada cliente, escuchando sus ideas 
              y convirtiéndolas en realidad, siempre asegurando la máxima calidad y atención 
              a cada detalle.
            </p>
          </Col>
          <Col lg={6}>
            <div className="about-image-wrapper mb-4">
              <img
                src="/proyecto-1.jpg"
                alt="Proyecto Construcción Larquin"
                className="about-image"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
            <h2 className="section-title mb-4">Nuestra Misión</h2>
            <p className="about-text">
              Nuestra misión es ofrecer soluciones integrales y personalizadas, donde nuestros 
              clientes no tengan que preocuparse por la gestión de la obra, la compra de materiales 
              o la contratación de distintos proveedores.
            </p>
            <p className="about-text">
              Nosotros nos encargamos de todo el proceso, para que tú puedas disfrutar de la 
              experiencia de construir o remodelar tu hogar sin complicaciones.
            </p>
          </Col>
          <Col lg={6} className="order-lg-1">
            <div className="about-image-wrapper">
              <img
                src="/proyecto-2.jpg"
                alt="Construcción Residencial"
                className="about-image"
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2 className="section-title text-center mb-5">Qué Nos Diferencia</h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6} lg={4}>
            <div className="differentiator-card h-100">
              <div className="differentiator-icon mb-3">
                <i className="bi bi-award-fill"></i>
              </div>
              <h4 className="differentiator-title mb-3">Experiencia y Confiabilidad</h4>
              <p className="differentiator-text">
                Más de 20 años de experiencia en el sector nos respaldan. Sabemos cómo hacer 
                las cosas bien y a tiempo.
              </p>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="differentiator-card h-100">
              <div className="differentiator-icon mb-3">
                <i className="bi bi-puzzle-fill"></i>
              </div>
              <h4 className="differentiator-title mb-3">Soluciones Completas</h4>
              <p className="differentiator-text">
                Nos encargamos de todo el proceso, desde la planificación y diseño hasta la 
                construcción y entrega final. ¡Tú solo te preocupas por disfrutar el resultado!
              </p>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="differentiator-card h-100">
              <div className="differentiator-icon mb-3">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <h4 className="differentiator-title mb-3">Innovación y Tecnología</h4>
              <p className="differentiator-text">
                Utilizamos los materiales más avanzados y las mejores técnicas de construcción, 
                garantizando eficiencia, seguridad y durabilidad en cada proyecto.
              </p>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="differentiator-card h-100">
              <div className="differentiator-icon mb-3">
                <i className="bi bi-house-heart-fill"></i>
              </div>
              <h4 className="differentiator-title mb-3">Especialización en Estilo Americano</h4>
              <p className="differentiator-text">
                Aunque trabajamos con diversos estilos arquitectónicos, nuestra especialidad 
                es el estilo americano, ofreciendo construcciones modernas, funcionales y de 
                alta calidad.
              </p>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="differentiator-card h-100">
              <div className="differentiator-icon mb-3">
                <i className="bi bi-people-fill"></i>
              </div>
              <h4 className="differentiator-title mb-3">Atención Personalizada</h4>
              <p className="differentiator-text">
                Cada cliente es único y cada proyecto recibe atención personalizada para 
                asegurar que el resultado final supere las expectativas.
              </p>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="differentiator-card h-100">
              <div className="differentiator-icon mb-3">
                <i className="bi bi-shield-check-fill"></i>
              </div>
              <h4 className="differentiator-title mb-3">Garantía de Calidad</h4>
              <p className="differentiator-text">
                Nuestro compromiso con la excelencia se refleja en cada proyecto, 
                garantizando resultados duraderos y de la más alta calidad.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <div className="about-cta">
              <h3 className="mb-3">¿Listo para comenzar tu proyecto?</h3>
              <p className="mb-4 text-muted">
                Conoce más sobre nuestros servicios y cómo podemos ayudarte
              </p>
              <a href="#contacto" className="btn btn-primary btn-lg">
                Contáctanos
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
