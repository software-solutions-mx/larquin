import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Telephone, Envelope, GeoAlt, Whatsapp, Clock, Send } from 'react-bootstrap-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      // Enviar por WhatsApp
      const message = `Hola, mi nombre es ${formData.name}.%0A%0AAsunto: ${formData.subject}%0A%0A${formData.message}%0A%0AContacto:%0ATel: ${formData.phone}%0AEmail: ${formData.email}`;
      window.open(`https://wa.me/526391207930?text=${message}`, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setValidated(false);
    }
  };

  const contactInfo = [
    {
      icon: <GeoAlt className="contact-icon" />,
      title: 'Visitanos en:',
      content: 'Carretera Delicias-Meoqui Km 2',
      content2: 'Cd. Delicias, Chihuahua',
      link: 'https://maps.google.com/?q=Carretera+Delicias-Meoqui+Km+2,+Cd.+Delicias,+Chihuahua'
    },
    {
      icon: <Telephone className="contact-icon" />,
      title: 'Llámanos:',
      content: 'Tel. 639 120 7930',
      link: 'tel:6391207930'
    },
    {
      icon: <Envelope className="contact-icon" />,
      title: 'Escríbenos:',
      content: 'contacto@construccionamericanalarquin.com',
      link: 'mailto:contacto@construccionamericanalarquin.com'
    },
    {
      icon: <Clock className="contact-icon" />,
      title: 'Horario:',
      content: 'Lunes a Viernes: 9:00 - 18:00',
      content2: 'Sábados: 9:00 - 14:00'
    }
  ];

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-hero">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="contact-title text-white mb-3" data-aos="fade-up">Contacto</h2>
              <p className="contact-subtitle text-white" data-aos="fade-up" data-aos-delay="100">
                Estamos listos para escucharte y ofrecerte soluciones personalizadas <br />
                para hacer realidad tu proyecto.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="contact-content">
        <Row className="g-4">
          {/* Contact Information Cards */}
          <Col lg={4}>
            <div className="contact-info-wrapper" data-aos="fade-right">
              <h3 className="info-title mb-4">Información de Contacto</h3>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-info-card mb-3 border-0">
                  <Card.Body>
                    <div className="d-flex align-items-start">
                      <div className="icon-wrapper">
                        {info.icon}
                      </div>
                      <div className="info-content">
                        <h6 className="info-label mb-2">{info.title}</h6>
                        {info.link ? (
                          <>
                            <a href={info.link} className="info-text" target="_blank" rel="noopener noreferrer">
                              {info.content}
                            </a>
                            {info.content2 && <p className="info-text mb-0">{info.content2}</p>}
                          </>
                        ) : (
                          <>
                            <p className="info-text mb-0">{info.content}</p>
                            {info.content2 && <p className="info-text mb-0">{info.content2}</p>}
                          </>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}

              {/* WhatsApp CTA */}
              <Card className="whatsapp-card border-0 mt-4">
                <Card.Body className="text-center">
                  <Whatsapp className="whatsapp-icon mb-3" />
                  <h5 className="mb-3">¿Prefieres WhatsApp?</h5>
                  <p className="text-muted mb-3">
                    Contáctanos directamente y recibe respuesta inmediata
                  </p>
                  <Button 
                    variant="success" 
                    size="lg" 
                    className="whatsapp-btn"
                    href="https://wa.me/526391207930?text=Nos%20gustaria%20saber%20mas%20sobre%20Construcción%20Larquin"
                    target="_blank"
                  >
                    <Whatsapp className="me-2" />
                    Abrir WhatsApp
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <Card className="contact-form-card border-0" data-aos="fade-left">
              <Card.Body className="p-4 p-md-5">
                <h3 className="form-title mb-4">Envíanos un Mensaje</h3>
                <p className="text-muted mb-4">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad
                </p>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label>Nombre Completo *</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor ingresa tu nombre
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formPhone">
                        <Form.Label>Teléfono *</Form.Label>
                        <Form.Control
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Tu número de teléfono"
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor ingresa tu teléfono
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Correo Electrónico *</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor ingresa un email válido
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="formSubject">
                        <Form.Label>Asunto *</Form.Label>
                        <Form.Select
                          required
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Selecciona un asunto</option>
                          <option value="Nueva Construcción">Nueva Construcción</option>
                          <option value="Remodelación">Remodelación</option>
                          <option value="Ampliación">Ampliación</option>
                          <option value="Cotización">Cotización</option>
                          <option value="Consultoría">Consultoría</option>
                          <option value="Otro">Otro</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Por favor selecciona un asunto
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="formMessage">
                        <Form.Label>Mensaje *</Form.Label>
                        <Form.Control
                          required
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Cuéntanos sobre tu proyecto..."
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor escribe tu mensaje
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Button 
                        variant="primary" 
                        size="lg" 
                        type="submit" 
                        className="submit-btn w-100"
                      >
                        <Send className="me-2" />
                        Enviar Mensaje por WhatsApp
                      </Button>
                      <p className="text-muted text-center mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
                        * Campos obligatorios
                      </p>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mt-5">
          <Col>
            <Card className="map-card border-0">
              <Card.Body className="p-0">
                <div className="map-wrapper">
                  <iframe
                    title="Ubicación de Construcción Americana Larquin"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.5!2d-105.47!3d28.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDExJzI0LjAiTiAxMDXCsDI4JzEyLjAiVw!5e0!3m2!1ses!2smx!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="map-overlay">
                  <div className="map-info">
                    <h5>
                      <GeoAlt className="me-2" />
                      Nuestra Ubicación
                    </h5>
                    <p className="mb-2">Carretera Delicias-Meoqui Km 2</p>
                    <p className="mb-0">Cd. Delicias, Chihuahua</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
