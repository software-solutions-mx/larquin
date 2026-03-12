import { useState } from 'react';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const projects = [
    {
      image: '/proyecto-1.jpg',
      title: 'Residencia Estilo Americano',
      description: 'Casa en construcción con acabados de primera calidad',
      category: 'construccion'
    },
    {
      image: '/proyecto-2.jpg',
      title: 'Remodelación Integral',
      description: 'Proyecto de remodelación completa con diseño moderno',
      category: 'remodelacion'
    },
    {
      image: '/proyecto-3.jpg',
      title: 'Construcción Residencial',
      description: 'Desarrollo de vivienda con técnicas de construcción avanzadas',
      category: 'construccion'
    },
    {
      image: '/proyecto-4.jpg',
      title: 'Ampliación de Hogar',
      description: 'Expansión de espacios con diseño funcional',
      category: 'ampliacion'
    },
    {
      image: '/proyecto-5.jpg',
      title: 'Casa Moderna',
      description: 'Construcción de casa con estilo contemporáneo',
      category: 'construccion'
    },
    {
      image: '/proyecto-6.jpg',
      title: 'Remodelación de Cocina',
      description: 'Renovación completa con acabados de lujo',
      category: 'remodelacion'
    },
    {
      image: '/hero-bg.jpg',
      title: 'Proyecto Residencial',
      description: 'Desarrollo habitacional con diseño arquitectónico',
      category: 'construccion'
    },
    {
      image: '/proceso-bg.jpg',
      title: 'Construcción en Proceso',
      description: 'Obra en desarrollo con técnicas modernas',
      category: 'construccion'
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos los Proyectos' },
    { id: 'construccion', label: 'Construcción' },
    { id: 'remodelacion', label: 'Remodelación' },
    { id: 'ampliacion', label: 'Ampliación' }
  ];

  const filteredProjects = activeCategory === 'todos'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="proyectos" className="projects-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <span className="section-badge">+20 Años de experiencia</span>
            <h2 className="section-title mb-3">Proyectos</h2>
            <p className="section-subtitle text-muted">
              En Constructora Larquin, cada proyecto es un reflejo de nuestra dedicación, 
              experiencia y atención al detalle. A lo largo de más de 20 años, hemos transformado 
              terrenos vacíos en hogares de ensueño, remodelado espacios para darles nueva vida, 
              y ampliado residencias para adaptarlas a las necesidades de nuestros clientes.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Nav variant="pills" className="projects-filter justify-content-center">
              {categories.map((category) => (
                <Nav.Item key={category.id}>
                  <Nav.Link
                    active={activeCategory === category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className="filter-link"
                  >
                    {category.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        <Row className="g-4">
          {filteredProjects.map((project, index) => (
            <Col key={index} sm={6} lg={4}>
              <Card className="project-card h-100 border-0">
                <div className="project-image-wrapper">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <h5 className="text-white mb-2">{project.title}</h5>
                      <p className="text-white-50 mb-0">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <div className="projects-cta">
              <h3 className="mb-3">¿Quieres ver tu proyecto aquí?</h3>
              <p className="mb-4 text-muted">
                Comienza hoy mismo tu construcción con nosotros
              </p>
              <a href="#contacto" className="btn btn-primary btn-lg">
                Iniciar Mi Proyecto
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
