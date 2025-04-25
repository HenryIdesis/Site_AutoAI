import React from 'react';
import '../styles/Contact.css';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1>Entre em Contato</h1>
          <p>Estamos prontos para ajudar seu negócio a crescer com atendimento automatizado</p>
        </div>
      </section>
      
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Fale Conosco</h2>
            <p className="contact-intro">
              Tem dúvidas sobre nossos planos ou precisa de ajuda para escolher a melhor solução para o seu negócio? 
              Nossa equipe está pronta para atender você.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>E-mail</h3>
                  <p>contato@secretaria.com.br</p>
                  <p>suporte@secretaria.com.br</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>Telefone</h3>
                  <p>(11) 99999-9999</p>
                  <p>(11) 3333-3333</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>Endereço</h3>
                  <p>Av. Paulista, 1000 - Bela Vista</p>
                  <p>São Paulo - SP, 01310-100</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-details">
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h3>Redes Sociais</h3>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <h2>Envie uma Mensagem</h2>
            <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
            <ContactForm />
          </div>
        </div>
      </section>
      
      <section className="contact-map">
        <div className="map-container">
          <div className="map-placeholder">
            <i className="fas fa-map-marked-alt"></i>
            <p>Mapa de Localização</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
