import React from 'react';
import { Link } from 'react-router-dom';
import './inicio.scss';
import logo from '../assets/Sabores da rua (1).png';


const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <img src={logo} alt="Logo da Confeitaria" className="logo" />
        <nav className="nav">
          <button className="nav-button">Carrinho</button>
          <Link to="/Sobre" className="nav-button">Sobre nós</Link>
          <Link to="/Produtos" className="nav-button">Produtos</Link>
          <Link to="/Login" className="nav-button">Login</Link>
        </nav>
      </header>

      <section className="dynamic-section">
       
        <div className="ideas">
          <h2>Nossas Ideias</h2>
          <ul>
            <li>Delícias feitas com amor</li>
            <li>Receitas tradicionais</li>
            <li>Ingredientes frescos e locais</li>
            <li>Compromisso com a qualidade</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
