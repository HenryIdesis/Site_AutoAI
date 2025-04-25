import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/Home.css';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import PriceCard from '../components/PriceCard';
import Button from '../components/Button';
const Home = () => {
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
    return (_jsxs("div", { className: "home-page", children: [_jsx(Hero, { title: "Automatize seu atendimento com Intelig\u00EAncia Artificial", subtitle: "A FluxIA \u00E9 a solu\u00E7\u00E3o perfeita para pequenos neg\u00F3cios e profissionais aut\u00F4nomos que desejam oferecer atendimento de qualidade 24 horas por dia, 7 dias por semana.", ctaText: "Conhe\u00E7a nossos planos" }), _jsx(FeatureSection, {}), _jsx("section", { className: "pricing-section", children: _jsxs("div", { className: "pricing-container", children: [_jsxs("div", { className: "pricing-header", children: [_jsx("h2", { className: "section-title", children: "Planos que cabem no seu bolso" }), _jsx("p", { className: "section-subtitle", children: "Escolha o plano ideal para o seu neg\u00F3cio e comece a automatizar seu atendimento hoje mesmo" })] }), _jsx("div", { className: "pricing-grid", children: plans.map((plan, index) => (_jsx(PriceCard, { title: plan.title, price: plan.price, features: plan.features, isPopular: plan.isPopular }, index))) })] }) }), _jsx(TestimonialSection, {}), _jsx("section", { className: "cta-section", children: _jsxs("div", { className: "cta-container", children: [_jsx("h2", { children: "Pronto para transformar o atendimento do seu neg\u00F3cio?" }), _jsx("p", { children: "Comece agora mesmo com nosso plano Pro por apenas R$99,90/m\u00EAs." }), _jsxs("div", { className: "cta-buttons", children: [_jsx(Button, { type: "secondary", size: "large", children: "Come\u00E7ar agora" }), _jsx(Button, { type: "outline", size: "large", children: "Fale conosco" })] })] }) })] }));
};
export default Home;
