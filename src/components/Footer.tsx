import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-text">Secretar</span>
          <span className="logo-highlight">IA</span>
        </div>
        <p className="footer-slogan">Automatizando o atendimento do seu negócio com inteligência artificial</p>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Navegação</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/sobre">Sobre</a></li>
              <li><a href="/planos">Planos</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contato</h3>
            <ul>
              <li>contato@secretaria.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SecretarIA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
