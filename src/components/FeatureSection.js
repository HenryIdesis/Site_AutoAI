import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/FeatureSection.css';
const Feature = ({ icon, title, description }) => {
    return (_jsxs("div", { className: "feature-item", children: [_jsx("div", { className: "feature-icon", children: _jsx("i", { className: icon }) }), _jsx("h3", { className: "feature-title", children: title }), _jsx("p", { className: "feature-description", children: description })] }));
};
const FeatureSection = () => {
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
    return (_jsx("section", { className: "feature-section", children: _jsxs("div", { className: "feature-container", children: [_jsxs("div", { className: "feature-header", children: [_jsx("h2", { className: "section-title", children: "Por que escolher a FluxIA?" }), _jsx("p", { className: "section-subtitle", children: "Transforme o atendimento do seu neg\u00F3cio com nossa solu\u00E7\u00E3o de chatbot inteligente" })] }), _jsx("div", { className: "feature-grid", children: features.map((feature, index) => (_jsx(Feature, { icon: feature.icon, title: feature.title, description: feature.description }, index))) })] }) }));
};
export default FeatureSection;
