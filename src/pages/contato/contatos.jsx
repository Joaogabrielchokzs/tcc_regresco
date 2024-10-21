import React from 'react';
import { Link } from 'react-router-dom';
import './contato.scss';
import logo from '../image/Sabores da rua.png';



const contato = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo da Confeitaria" className="logo" />
      <div className="nav">
        <div className="contato">
          <Link to="/Contato">Contato</Link>
        </div>
        <div>
          <Link to="/Carrinho" className="carrinho">Clique Aqui</Link>
        </div>
        <div>
          <Link to="/Sobre" className="sobre">Sobre nós</Link>
        </div>
        <div>
          <Link to="/Produtos" className="produtos">Produtos</Link>
        </div>
        <div>
          <Link to="/Login" className="login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default contato;