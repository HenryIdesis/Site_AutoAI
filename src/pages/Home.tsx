import React from 'react';
import '../styles/Home.css';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import PriceCard from '../components/PriceCard';
import Button from '../components/Button';

const Home: React.FC = () => {
  // Dados dos planos
  const plans = [
    {
      title: 'Básico',
      price: '59',
      features: [
        'Chatbot personalizado',
        'Atendimento 24/7',
        'Respostas automáticas',
        'Integração com WhatsApp',
        'Até 500 conversas/mês',
        'Suporte por e-mail'
      ],
      isPopular: false
    },
    {
      title: 'Pro',
      price: '99',
      features: [
        'Tudo do plano Básico',
        'Até 2.000 conversas/mês',
        'Integração com site e redes sociais',
        'Personalização avançada',
        'Relatórios mensais',
        'Suporte prioritário'
      ],
      isPopular: true
    },
    {
      title: 'Premium',
      price: '179',
      features: [
        'Tudo do plano Pro',
        'Conversas ilimitadas',
        'IA treinada para seu negócio',
        'Integração com CRM',
        'Relatórios semanais detalhados',
        'Suporte VIP 24/7'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="home-page">
      <Hero 
        title="Automatize seu atendimento com Inteligência Artificial"
        subtitle="A SecretarIA é a solução perfeita para pequenos negócios e profissionais autônomos que desejam oferecer atendimento de qualidade 24 horas por dia, 7 dias por semana."
        ctaText="Conheça nossos planos"
      />
      
      <FeatureSection />
      
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <h2 className="section-title">Planos que cabem no seu bolso</h2>
            <p className="section-subtitle">
              Escolha o plano ideal para o seu negócio e comece a automatizar seu atendimento hoje mesmo
            </p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <PriceCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      
      <section className="cta-section">
        <div className="cta-container">
          <h2>Pronto para transformar o atendimento do seu negócio?</h2>
          <p>Comece agora mesmo com nosso plano básico por apenas R$59/mês.</p>
          <div className="cta-buttons">
            <Button type="secondary" size="large">
              Começar agora
            </Button>
            <Button type="outline" size="large">
              Fale conosco
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
