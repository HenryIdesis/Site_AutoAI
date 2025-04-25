import React from 'react';
import '../styles/FeatureSection.css';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: 'fas fa-robot',
      title: 'Atendimento 24/7',
      description: 'Seu chatbot atende clientes a qualquer hora, todos os dias, sem pausas ou férias.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Respostas Instantâneas',
      description: 'Respostas imediatas para as dúvidas mais comuns dos seus clientes.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Aumento de Conversão',
      description: 'Capture mais leads e aumente suas vendas com atendimento eficiente.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Personalização Completa',
      description: 'Chatbot personalizado de acordo com a identidade e necessidades do seu negócio.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Multi-plataforma',
      description: 'Funciona perfeitamente em seu site, WhatsApp, Facebook e Instagram.'
    },
    {
      icon: 'fas fa-brain',
      title: 'IA Avançada',
      description: 'Tecnologia de ponta que aprende e melhora com cada interação.'
    }
  ];

  return (
    <section className="feature-section">
      <div className="feature-container">
        <div className="feature-header">
          <h2 className="section-title">Por que escolher a FluxIA?</h2>
          <p className="section-subtitle">
            Transforme o atendimento do seu negócio com nossa solução de chatbot inteligente
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
