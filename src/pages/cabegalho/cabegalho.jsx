import React from 'react';
import { Link } from 'react-router-dom';
import './cabegalho.scss'; 
import logo from '../image/Sabores da rua.png';

const Cabegalho = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo da Confeitaria" className="logo" />
      <nav className="nav">
        <Link to="/Carrinho" className="nav-button">Carrinho</Link>
        <Link to="/Sobre" className="nav-button">Sobre nós</Link>
        <Link to="/Produtos" className="nav-button">Produtos</Link>
        <Link to="/Login" className="nav-button">Login</Link>
      </nav>
    </header>
  );
};

export default Cabegalho;
