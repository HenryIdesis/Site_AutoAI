import React from 'react';
import '../styles/Plans.css';
import PriceCard from '../components/PriceCard';
import Button from '../components/Button';

const Plans: React.FC = () => {
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
  

  // Dados das perguntas frequentes
  const faqs = [
    {
      question: 'Como funciona a integração com WhatsApp?',
      answer: 'A integração com WhatsApp é simples e rápida. Após a contratação, nossa equipe configura o chatbot para funcionar com o número de WhatsApp do seu negócio através da API oficial do WhatsApp Business. Não é necessário nenhum conhecimento técnico da sua parte.'
    },
    {
      question: 'Posso personalizar as respostas do chatbot?',
      answer: 'Sim! Todos os nossos planos incluem personalização das respostas do chatbot de acordo com o seu negócio. No plano Pro e Premium, você tem acesso a opções avançadas de personalização, incluindo tom de voz, fluxos de conversa específicos e integração com seu catálogo de produtos ou serviços.'
    },
    {
      question: 'O que acontece se eu ultrapassar o limite de conversas do meu plano?',
      answer: 'Se você estiver próximo de atingir o limite de conversas do seu plano, enviaremos uma notificação. Caso ultrapasse, você pode optar por fazer um upgrade para um plano superior ou pagar apenas pelas conversas excedentes (R$0,10 por conversa adicional no plano Básico e R$0,05 no plano Pro).'
    },
    {
      question: 'É possível mudar de plano depois?',
      answer: 'Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Ao fazer upgrade, o valor proporcional já pago no plano atual será descontado do novo plano. Para downgrades, a mudança será efetivada na próxima renovação.'
    },
    {
      question: 'Quanto tempo leva para implementar o chatbot?',
      answer: 'A implementação básica leva de 1 a 3 dias úteis após a contratação. Para personalizações mais avançadas nos planos Pro e Premium, o prazo pode ser de 3 a 7 dias úteis, dependendo da complexidade das integrações e personalizações solicitadas.'
    },
    {
      question: 'Existe algum período de fidelidade?',
      answer: 'Não exigimos período de fidelidade. Todos os planos são mensais e você pode cancelar a qualquer momento. Oferecemos também descontos especiais para pagamentos trimestrais (10% de desconto) ou anuais (20% de desconto).'
    }
  ];

  return (
    <div className="plans-page">
      <section className="plans-hero">
        <div className="plans-hero-container">
          <h1>Escolha o plano ideal para o seu negócio</h1>
          <p>Soluções acessíveis para automatizar o atendimento do seu negócio com inteligência artificial</p>
        </div>
      </section>
      
      <section className="plans-pricing">
        <div className="plans-container">
          <div className="plans-header">
            <h2>Nossos Planos</h2>
            <p>
              Todos os planos incluem setup gratuito, suporte técnico e atualizações contínuas.
              Não há taxas de adesão ou custos ocultos.
            </p>
          </div>
          
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <PriceCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                isPopular={plan.isPopular}
                buttonText="Contratar Agora"
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="plans-comparison">
  <div className="plans-container">
    <h2>Comparativo de Planos</h2>
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Recursos</th>
            <th>Experimental</th>
            <th>Básico</th>
            <th>PRO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chatbot funcional</td>
            <td><i className="fas fa-check"></i></td>
            <td><i className="fas fa-check"></i></td>
            <td><i className="fas fa-check"></i></td>
          </tr>
          <tr>
            <td>Integração com WhatsApp</td>
            <td><i className="fas fa-times"></i></td>
            <td><i className="fas fa-check"></i></td>
            <td><i className="fas fa-check"></i></td>
          </tr>
          <tr>
            <td>Histórico de conversas</td>
            <td><i className="fas fa-times"></i></td>
            <td><i className="fas fa-times"></i></td>
            <td><i className="fas fa-check"></i></td>
          </tr>
          <tr>
            <td>Integração com agenda</td>
            <td><i className="fas fa-times"></i></td>
            <td><i className="fas fa-times"></i></td>
            <td><i className="fas fa-check"></i></td>
          </tr>
          <tr>
            <td>Pagamento Automático (em breve)</td>
            <td><i className="fas fa-times"></i></td>
            <td><i className="fas fa-times"></i></td>
            <td><i className="fas fa-check"></i></td>
          </tr>
          <tr>
            <td>Estatísticas (em breve)</td>
            <td><i className="fas fa-times"></i></td>
            <td>Básicas</td>
            <td>Avançadas</td>
          </tr>
          <tr>
            <td>Suporte</td>
            <td><i className="fas fa-times"></i></td>
            <td>E-mail</td>
            <td>Prioritário</td>
          </tr>
          <tr>
            <td>Descontos</td>
            <td><i className="fas fa-times"></i></td>
            <td>10% trimestral, 20% semestral</td>
            <td>10% trimestral, 20% semestral</td>
          </tr>
          <tr>
            <td>Preço mensal</td>
            <td>Gratuito</td>
            <td>R$ 69,90</td>
            <td><strong>R$ 99,90</strong> ⭐</td>
          </tr>
          <tr className="table-actions">
            <td></td>
            <td>
              <Button type="primary" size="small">Testar Agora</Button>
            </td>
            <td>
              <Button type="primary" size="small">Assinar</Button>
            </td>
            <td>
              <Button type="secondary" size="small">Melhor Escolha</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
    
      <section className="plans-faq">
        <div className="plans-container">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="plans-cta">
        <div className="plans-container">
          <h2>Ainda tem dúvidas?</h2>
          <p>
            Nossa equipe está pronta para ajudar você a escolher o plano ideal para o seu negócio.
            Entre em contato conosco para uma consultoria gratuita.
          </p>
          <div className="plans-cta-buttons">
            <Button type="secondary" size="large">
              Falar com um consultor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
