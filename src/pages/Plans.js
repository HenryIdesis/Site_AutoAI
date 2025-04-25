import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/Plans.css';
import PriceCard from '../components/PriceCard';
import Button from '../components/Button';
const Plans = () => {
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
    return (_jsxs("div", { className: "plans-page", children: [_jsx("section", { className: "plans-hero", children: _jsxs("div", { className: "plans-hero-container", children: [_jsx("h1", { children: "Escolha o plano ideal para o seu neg\u00F3cio" }), _jsx("p", { children: "Solu\u00E7\u00F5es acess\u00EDveis para automatizar o atendimento do seu neg\u00F3cio com intelig\u00EAncia artificial" })] }) }), _jsx("section", { className: "plans-pricing", children: _jsxs("div", { className: "plans-container", children: [_jsxs("div", { className: "plans-header", children: [_jsx("h2", { children: "Nossos Planos" }), _jsx("p", { children: "Todos os planos incluem setup gratuito, suporte t\u00E9cnico e atualiza\u00E7\u00F5es cont\u00EDnuas. N\u00E3o h\u00E1 taxas de ades\u00E3o ou custos ocultos." })] }), _jsx("div", { className: "plans-grid", children: plans.map((plan, index) => (_jsx(PriceCard, { title: plan.title, price: plan.price, features: plan.features, isPopular: plan.isPopular, buttonText: "Contratar Agora" }, index))) })] }) }), _jsx("section", { className: "plans-comparison", children: _jsxs("div", { className: "plans-container", children: [_jsx("h2", { children: "Comparativo de Planos" }), _jsx("div", { className: "comparison-table-wrapper", children: _jsxs("table", { className: "comparison-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Recursos" }), _jsx("th", { children: "Experimental" }), _jsx("th", { children: "B\u00E1sico" }), _jsx("th", { children: "PRO" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { children: "Chatbot funcional" }), _jsx("td", { children: _jsx("i", { className: "fas fa-check" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-check" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-check" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: "Integra\u00E7\u00E3o com WhatsApp" }), _jsx("td", { children: _jsx("i", { className: "fas fa-times" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-check" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-check" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: "Hist\u00F3rico de conversas" }), _jsx("td", { children: _jsx("i", { className: "fas fa-times" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-times" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-check" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: "Integra\u00E7\u00E3o com agenda" }), _jsx("td", { children: _jsx("i", { className: "fas fa-times" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-times" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-check" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: "Pagamento Autom\u00E1tico (em breve)" }), _jsx("td", { children: _jsx("i", { className: "fas fa-times" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-times" }) }), _jsx("td", { children: _jsx("i", { className: "fas fa-check" }) })] }), _jsxs("tr", { children: [_jsx("td", { children: "Estat\u00EDsticas (em breve)" }), _jsx("td", { children: _jsx("i", { className: "fas fa-times" }) }), _jsx("td", { children: "B\u00E1sicas" }), _jsx("td", { children: "Avan\u00E7adas" })] }), _jsxs("tr", { children: [_jsx("td", { children: "Suporte" }), _jsx("td", { children: _jsx("i", { className: "fas fa-times" }) }), _jsx("td", { children: "E-mail" }), _jsx("td", { children: "Priorit\u00E1rio" })] }), _jsxs("tr", { children: [_jsx("td", { children: "Pre\u00E7o mensal" }), _jsx("td", { children: "Gratuito" }), _jsx("td", { children: "R$ 69,90" }), _jsx("td", { children: _jsx("strong", { children: "R$ 99,90" }) })] }), _jsxs("tr", { className: "table-actions", children: [_jsx("td", {}), _jsx("td", { children: _jsx(Button, { type: "primary", size: "small", children: "Testar Agora" }) }), _jsx("td", { children: _jsx(Button, { type: "primary", size: "small", children: "Assinar" }) }), _jsx("td", { children: _jsx(Button, { type: "secondary", size: "small", children: "Melhor Escolha" }) })] })] })] }) })] }) }), _jsx("section", { className: "plans-faq", children: _jsxs("div", { className: "plans-container", children: [_jsx("h2", { children: "Perguntas Frequentes" }), _jsx("div", { className: "faq-grid", children: faqs.map((faq, index) => (_jsxs("div", { className: "faq-item", children: [_jsx("h3", { children: faq.question }), _jsx("p", { children: faq.answer })] }, index))) })] }) }), _jsx("section", { className: "plans-cta", children: _jsxs("div", { className: "plans-container", children: [_jsx("h2", { children: "Ainda tem d\u00FAvidas?" }), _jsx("p", { children: "Nossa equipe est\u00E1 pronta para ajudar voc\u00EA a escolher o plano ideal para o seu neg\u00F3cio. Entre em contato conosco para uma consultoria gratuita." }), _jsx("div", { className: "plans-cta-buttons", children: _jsx(Button, { type: "secondary", size: "large", children: "Falar com um consultor" }) })] }) })] }));
};
export default Plans;
