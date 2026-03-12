import { Container, Row, Col } from 'react-bootstrap';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: 'bi-chat-dots',
      title: 'Consulta y Cotización',
      description: 'Te escuchamos y entendemos tus necesidades. Realizamos una evaluación detallada y te proporcionamos una cotización transparente.'
    },
    {
      number: '02',
      icon: 'bi-pencil-square',
      title: 'Diseño y Planificación',
      description: 'Desarrollamos planos y diseños personalizados. Definimos materiales, cronograma y presupuesto definitivo para tu proyecto.'
    },
    {
      number: '03',
      icon: 'bi-truck',
      title: 'Preparación y Logística',
      description: 'Gestionamos permisos, adquirimos materiales de alta calidad y organizamos todo para iniciar la construcción sin contratiempos.'
    },
    {
      number: '04',
      icon: 'bi-gear',
      title: 'Construcción y Supervisión',
      description: 'Ejecutamos la obra con nuestro equipo experto. Supervisión constante para garantizar calidad, seguridad y cumplimiento de plazos.'
    },
    {
      number: '05',
      icon: 'bi-key',
      title: 'Entrega Llave en Mano',
      description: 'Realizamos inspección final, ajustes de detalle y te entregamos tu hogar completamente terminado y listo para habitar.'
    }
  ];

  return (
    <section id="proceso" className="process-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title mb-3">Nuestro Proceso</h2>
            <p className="section-subtitle text-muted">
              5 etapas para llevar tu proyecto desde la idea hasta la realidad
            </p>
          </Col>
        </Row>

        <Row className="position-relative">
          <div className="process-timeline d-none d-lg-block"></div>
          
          {steps.map((step, index) => (
            <Col key={index} lg={12} className="mb-4">
              <div className={`process-step ${index % 2 === 0 ? 'step-left' : 'step-right'}`}>
                <Row className={`align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <Col lg={5} className={index % 2 === 0 ? 'text-lg-end' : 'text-lg-start'}>
                    <div className="step-content">
                      <div className="step-number">{step.number}</div>
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </Col>
                  
                  <Col lg={2} className="text-center">
                    <div className="step-icon-wrapper">
                      <div className="step-icon">
                        <i className={`bi ${step.icon}`}></i>
                      </div>
                    </div>
                  </Col>
                  
                  <Col lg={5}></Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <div className="process-cta">
              <h3 className="mb-3">¿Listo para comenzar tu proyecto?</h3>
              <p className="mb-4 text-muted">
                Contáctanos hoy mismo y da el primer paso hacia el hogar de tus sueños
              </p>
              <a href="#contacto" className="btn btn-primary btn-lg">
                Iniciar Consulta Gratuita
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Process;
