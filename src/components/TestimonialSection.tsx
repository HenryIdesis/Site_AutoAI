import React from 'react';
import '../styles/TestimonialSection.css';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">
        <i className="fas fa-quote-left"></i>
        <p>{quote}</p>
      </div>
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {author.charAt(0)}
        </div>
        <div className="testimonial-info">
          <h4>{author}</h4>
          <p>{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "A SecretarIA transformou o atendimento da minha clínica. Meus pacientes adoram a rapidez nas respostas e eu economizo tempo valioso com agendamentos automáticos.",
      author: "Dra. Ana Silva",
      position: "Dentista",
      company: "Clínica Odontológica Sorrisos"
    },
    {
      quote: "Desde que implementei o chatbot da SecretarIA, as vendas online da minha pizzaria aumentaram em 35%. O atendimento automático 24 horas fez toda a diferença!",
      author: "Carlos Oliveira",
      position: "Proprietário",
      company: "Pizzaria Bella Napoli"
    },
    {
      quote: "Como nutricionista autônoma, não tinha como responder todas as mensagens. Com a SecretarIA, consigo focar nos atendimentos enquanto o chatbot cuida das dúvidas iniciais e agendamentos.",
      author: "Juliana Costa",
      position: "Nutricionista",
      company: "Nutri Vida Saudável"
    }
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">
            Veja como a SecretarIA está transformando negócios por todo o Brasil
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
