import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cabegalho.scss';
import logo from '../image/Sabores da rua.png';

const Cabecalho = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <img src={logo} alt="Logo da Confeitaria" className="logo" />
      <div className="menu">
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <button className="dropdown-button">Produtos</button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/Produtos/Categorias" className="produto-link">Categorias</Link>
              <Link to="/Produtos/Novidades" className="produto-link">Novidades</Link>
              <Link to="/Produtos/Promoções" className="produto-link">Promoções</Link>
              <Link to="/Produtos/Favoritos" className="produto-link">Favoritos</Link>
            </div>
          )}
        </div>
        <div>
          <Link to="/Contato" className="contato">Contato</Link>
        </div>
        <div>
          <Link to="/Carrinho" className="carrinho">Carrinho</Link>
        </div>
        <div>
          <Link to="/sobre" className="sobre">Sobre nós</Link>
        </div>
        <div>
          <Link to="/Login" className="login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Cabecalho;
