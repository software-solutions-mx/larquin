import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      image: '/proyecto-1.jpg',
      title: 'Residencia Estilo Americano',
      description: 'Casa en construcción con acabados de primera calidad',
      status: 'En Construcción'
    },
    {
      image: '/proyecto-2.jpg',
      title: 'Remodelación Integral',
      description: 'Proyecto de remodelación completa con diseño moderno',
      status: 'En Proceso'
    },
    {
      image: '/proyecto-3.jpg',
      title: 'Construcción Residencial',
      description: 'Desarrollo de vivienda con técnicas de construcción avanzadas',
      status: 'Próximamente'
    }
  ];

  return (
    <section id="proyectos" className="projects-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title mb-3">Proyectos en Desarrollo</h2>
            <p className="section-subtitle text-muted">
              Conoce algunos de nuestros proyectos actuales
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="project-card h-100 border-0 shadow">
                <div className="project-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <span className="project-status badge bg-primary">
                      {project.status}
                    </span>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="project-title">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <p className="mb-4 text-muted">
              ¿Quieres ver tu proyecto aquí? Comienza hoy mismo tu construcción con nosotros
            </p>
            <a href="#contacto" className="btn btn-primary btn-lg">
              Iniciar Mi Proyecto
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
