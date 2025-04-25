import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/TestimonialSection.css';
const Testimonial = ({ quote, author, position, company }) => {
    return (_jsxs("div", { className: "testimonial-card", children: [_jsxs("div", { className: "testimonial-quote", children: [_jsx("i", { className: "fas fa-quote-left" }), _jsx("p", { children: quote })] }), _jsxs("div", { className: "testimonial-author", children: [_jsx("div", { className: "testimonial-avatar", children: author.charAt(0) }), _jsxs("div", { className: "testimonial-info", children: [_jsx("h4", { children: author }), _jsxs("p", { children: [position, ", ", company] })] })] })] }));
};
const TestimonialSection = () => {
    const testimonials = [
        {
            quote: "A FluxIA transformou o atendimento da minha clínica. Meus pacientes adoram a rapidez nas respostas e eu economizo tempo valioso com agendamentos automáticos.",
            author: "Dra. Ana Silva",
            position: "Dentista",
            company: "Clínica Odontológica Sorrisos"
        },
        {
            quote: "Desde que implementei o chatbot da FluxIA, as vendas online da minha pizzaria aumentaram em 35%. O atendimento automático 24 horas fez toda a diferença!",
            author: "Carlos Oliveira",
            position: "Proprietário",
            company: "Pizzaria Bella Napoli"
        },
        {
            quote: "Como nutricionista autônoma, não tinha como responder todas as mensagens. Com a FluxIA, consigo focar nos atendimentos enquanto o chatbot cuida das dúvidas iniciais e agendamentos.",
            author: "Juliana Costa",
            position: "Nutricionista",
            company: "Nutri Vida Saudável"
        }
    ];
    return (_jsx("section", { className: "testimonial-section", children: _jsxs("div", { className: "testimonial-container", children: [_jsxs("div", { className: "testimonial-header", children: [_jsx("h2", { className: "section-title", children: "O que nossos clientes dizem" }), _jsx("p", { className: "section-subtitle", children: "Veja como a FluxIA est\u00E1 transformando neg\u00F3cios por todo o Brasil" })] }), _jsx("div", { className: "testimonial-grid", children: testimonials.map((testimonial, index) => (_jsx(Testimonial, { quote: testimonial.quote, author: testimonial.author, position: testimonial.position, company: testimonial.company }, index))) })] }) }));
};
export default TestimonialSection;
