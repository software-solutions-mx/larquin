import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'bi-house-door',
      title: 'Construcción Residencial',
      description: 'Construcción completa de casas al estilo americano, con los más altos estándares de calidad.'
    },
    {
      icon: 'bi-hammer',
      title: 'Remodelaciones',
      description: 'Renovación y remodelación integral de espacios para darle nueva vida a tu hogar.'
    },
    {
      icon: 'bi-bricks',
      title: 'Muros y Cimentación',
      description: 'Construcción de muros estructurales y cimentaciones sólidas para proyectos duraderos.'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Instalaciones Eléctricas',
      description: 'Diseño e instalación de sistemas eléctricos completos, seguros y eficientes.'
    },
    {
      icon: 'bi-water',
      title: 'Instalaciones Hidro-Sanitarias',
      description: 'Sistemas de agua potable y drenaje con materiales de primera calidad.'
    },
    {
      icon: 'bi-grid-3x3',
      title: 'Tablaroca',
      description: 'Instalación profesional de tablaroca para divisiones, plafones y acabados modernos.'
    },
    {
      icon: 'bi-droplet',
      title: 'Albercas',
      description: 'Diseño y construcción de albercas personalizadas para tu espacio de descanso.'
    },
    {
      icon: 'bi-grid',
      title: 'Herrería',
      description: 'Trabajos de herrería para puertas, ventanas, barandales y elementos decorativos.'
    },
    {
      icon: 'bi-table',
      title: 'Pérgolas',
      description: 'Construcción de pérgolas y estructuras de exterior para complementar tu hogar.'
    },
    {
      icon: 'bi-square',
      title: 'Plafones',
      description: 'Instalación de plafones y cielos rasos para acabados profesionales.'
    },
    {
      icon: 'bi-paint-bucket',
      title: 'Pintura',
      description: 'Servicio de pintura interior y exterior con acabados impecables.'
    },
    {
      icon: 'bi-tools',
      title: 'Servicios Adicionales',
      description: 'Soluciones personalizadas para cualquier necesidad de construcción o remodelación.'
    }
  ];

  return (
    <section id="servicios" className="services-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title mb-3" data-aos="fade-up">Nuestros Servicios</h2>
            <p className="section-subtitle text-muted">
              Soluciones completas de construcción y remodelación para tu hogar
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} sm={6} md={4} lg={3}>
              <Card className="service-card h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay={index * 50}>
                <Card.Body className="text-center p-4">
                  <div className="service-icon mb-3">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <Card.Title className="service-title mb-3">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <div className="service-cta p-4 bg-primary text-white rounded">
              <h3 className="mb-3">¿Necesitas un servicio específico?</h3>
              <p className="mb-4">
                Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte.
              </p>
              <a href="#contacto" className="btn btn-light btn-lg">
                Solicitar Cotización
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
