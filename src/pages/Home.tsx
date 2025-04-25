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
      title: 'Experimental',
      price: 'Gratuito',
      features: [
        'Teste como a IA funciona apenas nesse site',
        'Informe os dados do seu negócio e veja a IA em ação',
        'Chatbot simulado sem integração com WhatsApp',
        'Conversas ilimitadas dentro do site para demonstração'
      ],
      isPopular: false
    },
    {
      title: 'Básico',
      price: 'R$ 69,90',
      features: [
        'IA treinada com informações do seu negócio',
        'Atendimento via WhatsApp',
        'Multicliente (atende vários clientes ao mesmo tempo)',
        'Sem banco de dados (sem histórico de conversas)',
        'Sem integração com agenda',
        'Respostas em tempo real',
        'Estatísticas básicas (em breve)',
        'Suporte por e-mail',
        'Descontos: 10% trimestral, 20% semestral'
      ],
      isPopular: false
    },
    {
      title: 'PRO',
      price: 'R$ 99,90',
      features: [
        'Tudo do plano Básico',
        'Histórico de conversas personalizado',
        'Integração com agenda (agenda automatica)',
        'Suporte a múltiplos atendentes',
        'Estatísticas avançadas',
        'Pagamento automatico com PIX (Em breve)',
        'Suporte prioritário por e-mail e WhatsApp',
        'Descontos: 10% trimestral, 20% semestral'
      ],
      isPopular: true
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
          <p>Comece agora mesmo com nosso plano Pro por apenas R$99,90/mês.</p>
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
