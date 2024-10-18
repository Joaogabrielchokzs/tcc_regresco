import React from 'react';
import './inicio.scss';
import Cabegalho from '../cabegalho/cabegalho'


const Home = () => {
  return (
    <div className="home-container">
    <Cabegalho/>
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
