import React from 'react';
import '../styles/About.css';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-container">
          <h1>Sobre a SecretarIA</h1>
          <p>Transformando o atendimento de pequenos negócios com inteligência artificial</p>
        </div>
      </section>
      
      <section className="about-story">
        <div className="about-container">
          <div className="about-content">
            <h2>Nossa História</h2>
            <p>
              A SecretarIA nasceu da percepção de que pequenos negócios e profissionais autônomos enfrentam grandes desafios 
              para oferecer um atendimento de qualidade e consistente aos seus clientes.
            </p>
            <p>
              Fundada em 2023 por um grupo de especialistas em inteligência artificial e empreendedorismo, 
              nossa missão é democratizar o acesso à tecnologia de chatbots inteligentes, tornando-a acessível 
              para negócios de todos os tamanhos.
            </p>
            <p>
              Acreditamos que a automação inteligente do atendimento não é apenas um privilégio das grandes empresas. 
              Com a SecretarIA, dentistas, nutricionistas, pizzarias e diversos outros pequenos negócios podem oferecer 
              um atendimento excepcional 24 horas por dia, 7 dias por semana.
            </p>
          </div>
          <div className="about-image">
            <div className="about-image-container"></div>
          </div>
        </div>
      </section>
      
      <section className="about-mission">
        <div className="about-container">
          <div className="mission-card">
            <div className="mission-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Missão</h3>
            <p>
              Democratizar o acesso à tecnologia de chatbots inteligentes, permitindo que pequenos negócios 
              ofereçam atendimento de qualidade 24/7 aos seus clientes.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="mission-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Visão</h3>
            <p>
              Ser reconhecida como a principal solução de atendimento automatizado para pequenos negócios 
              no Brasil, transformando a maneira como eles se comunicam com seus clientes.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="mission-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Valores</h3>
            <p>
              Inovação, acessibilidade, excelência, empatia e compromisso com o sucesso dos nossos clientes 
              são os valores que guiam todas as nossas ações.
            </p>
          </div>
        </div>
      </section>
      
      <section className="about-team">
        <div className="about-container">
          <h2>Nossa Equipe</h2>
          <p className="team-intro">
            Somos um time apaixonado por tecnologia e inovação, comprometido em criar soluções 
            que realmente fazem a diferença para pequenos negócios.
          </p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="team-avatar">
                <div className="avatar-placeholder">MS</div>
              </div>
              <h3>Marcos Silva</h3>
              <p className="team-position">CEO & Fundador</p>
              <p className="team-bio">
                Especialista em IA com mais de 10 anos de experiência no desenvolvimento 
                de soluções tecnológicas para empresas de todos os portes.
              </p>
            </div>
            
            <div className="team-member">
              <div className="team-avatar">
                <div className="avatar-placeholder">JO</div>
              </div>
              <h3>Juliana Oliveira</h3>
              <p className="team-position">CTO</p>
              <p className="team-bio">
                Engenheira de software com vasta experiência em desenvolvimento de 
                sistemas de inteligência artificial e processamento de linguagem natural.
              </p>
            </div>
            
            <div className="team-member">
              <div className="team-avatar">
                <div className="avatar-placeholder">RL</div>
              </div>
              <h3>Rafael Lima</h3>
              <p className="team-position">Diretor de Produto</p>
              <p className="team-bio">
                Especialista em UX/UI com foco em criar experiências intuitivas e 
                eficientes para usuários de todos os níveis de conhecimento tecnológico.
              </p>
            </div>
            
            <div className="team-member">
              <div className="team-avatar">
                <div className="avatar-placeholder">CS</div>
              </div>
              <h3>Camila Santos</h3>
              <p className="team-position">Diretora de Atendimento</p>
              <p className="team-bio">
                Especialista em experiência do cliente, dedicada a garantir que nossos 
                chatbots ofereçam o melhor atendimento possível.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-cta">
        <div className="about-container">
          <h2>Junte-se a centenas de negócios que já transformaram seu atendimento</h2>
          <p>
            Descubra como a SecretarIA pode ajudar seu negócio a oferecer um atendimento excepcional, 
            aumentar suas conversões e liberar seu tempo para o que realmente importa.
          </p>
          <div className="about-cta-buttons">
            <Button type="secondary" size="large">
              Ver nossos planos
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

export default About;
