import React from 'react';
import '../styles/ContactForm.css';
import Button from './Button';

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Seu nome completo"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Seu e-mail de contato"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="(00) 00000-0000"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="business">Tipo de Negócio</label>
          <select id="business" name="business">
            <option value="">Selecione uma opção</option>
            <option value="dentista">Consultório Odontológico</option>
            <option value="nutricionista">Nutricionista</option>
            <option value="restaurante">Restaurante/Pizzaria</option>
            <option value="loja">Loja/Comércio</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Descreva como podemos ajudar seu negócio"
            rows={5}
            required
          ></textarea>
        </div>
        
        <div className="form-submit">
          <Button type="primary" size="large">
            Enviar Mensagem
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
