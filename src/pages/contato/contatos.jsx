import React from 'react';
import './contato.scss';
import Cabegalho from '../cabegalho/cabegalho'

const Contato = () => {
   
   
  return (
    <><Cabegalho/>
    <div className="contact-container">
      <div className=''header> 
 
      </div>
      <h1>Entre em Contato Conosco</h1>
      <p>Estamos aqui para responder suas dúvidas e atender seus pedidos!</p>
      juh
      <div className="contact-info">
        <p><strong>Telefone:</strong> (xx) xxxx-xxxx</p>
        <p><strong>E-mail:</strong> contato@confeitaria.com</p>
      </div>
      
      <div className="social-media">
        <p><strong>Siga-nos:</strong></p>
        <a href="https://instagram.com/confeitaria" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com/confeitaria" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
      
      <div className="location">
        <h2>Nossa Localização</h2>
        <iframe
          src="link_do_mapa_google"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen
          title="Localização"
        />
        <p>Endereço: Rua da Confeitaria, 123, Cidade - Estado</p>
      </div>
      
      <div className="hours">
        <h2>Horário de Funcionamento</h2>
        <p>Segunda a Sexta: 9h às 18h</p>
        <p>Sábado: 10h às 16h</p>
        <p>Domingo: Fechado</p>
      </div>
      
      <div className="contact-form">
        <h2>Envie uma Mensagem</h2>
        <form>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu E-mail" required />
          <textarea placeholder="Sua Mensagem" required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
</>    
  );
};

export default Contato;
