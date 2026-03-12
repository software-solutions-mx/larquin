import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      fixed="top" 
      className="shadow-sm navbar-custom"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <img
            src="/logotipo-larquin-extendido-m6LwPrKMgKuwo13v.png"
            className="d-inline-block align-top"
            alt="Construcción Americana Larquin"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" onClick={handleNavClick} className="nav-link-custom">
              Inicio
            </Nav.Link>
            <Nav.Link href="#nosotros" onClick={handleNavClick} className="nav-link-custom">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#servicios" onClick={handleNavClick} className="nav-link-custom">
              Servicios
            </Nav.Link>
            <Nav.Link href="#proceso" onClick={handleNavClick} className="nav-link-custom">
              Proceso
            </Nav.Link>
            <Nav.Link href="#proyectos" onClick={handleNavClick} className="nav-link-custom">
              Proyectos
            </Nav.Link>
            <Button 
              variant="primary" 
              href="#contacto" 
              onClick={handleNavClick}
              className="ms-lg-3 mt-2 mt-lg-0 btn-contact"
            >
              Contáctanos
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
