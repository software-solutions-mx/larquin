import { Container, Row, Col } from 'react-bootstrap';
import './ValueProposition.css';

const ValueProposition = () => {
  const values = [
    {
      icon: 'bi-award',
      title: '20+ Años de Experiencia',
      description: 'Dos décadas construyendo hogares de calidad al estilo americano en la región.'
    },
    {
      icon: 'bi-puzzle',
      title: 'Soluciones Completas',
      description: 'Desde el diseño hasta la entrega llave en mano. Un solo equipo para todo tu proyecto.'
    },
    {
      icon: 'bi-lightbulb',
      title: 'Innovación Constante',
      description: 'Técnicas modernas y materiales de primera calidad para resultados excepcionales.'
    },
    {
      icon: 'bi-house-heart',
      title: 'Especialización',
      description: 'Expertos en construcción residencial al estilo americano, con atención al detalle.'
    }
  ];

  return (
    <section className="value-proposition-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title mb-3">¿Por Qué Elegir Construcción Americana Larquin?</h2>
            <p className="section-subtitle text-muted">
              Somos tu mejor opción para construir o remodelar tu hogar
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {values.map((value, index) => (
            <Col key={index} md={6} lg={3}>
              <div className="value-card h-100 text-center p-4">
                <div className="value-icon mb-3">
                  <i className={`bi ${value.icon}`}></i>
                </div>
                <h4 className="value-title mb-3">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <div className="company-intro bg-light p-5 rounded">
              <Row className="align-items-center">
                <Col md={8}>
                  <h3 className="mb-3">Construcción Americana Larquin</h3>
                  <p className="mb-2">
                    Somos una constructora especializada en <strong>construcción residencial al estilo americano</strong>, 
                    con más de 20 años de experiencia en la región de Delicias, Chihuahua.
                  </p>
                  <p>
                    Ofrecemos un servicio completo <strong>llave en mano</strong>, desde la consulta inicial y diseño, 
                    hasta la entrega final de tu hogar totalmente terminado y listo para habitar.
                  </p>
                </Col>
                <Col md={4} className="text-center">
                  <div className="experience-badge">
                    <div className="badge-number">20+</div>
                    <div className="badge-text">Años</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ValueProposition;
