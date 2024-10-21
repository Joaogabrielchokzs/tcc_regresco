import React from 'react';
import { Link } from 'react-router-dom';
import './contato.scss';
import Cabegalho from '../cabegalho/cabegalho'

const Contato = () => {
    return (
<div className='home-contatos'>
  <div className='header'>
<Cabegalho></Cabegalho>
  </div>
  <div className="contato">
            <Link to="/Contato">Clique Aqui</Link>
          </div>
          <div>
            <Link to="/Contato">Clique Aqui</Link>
          </div>
          <div>
            <Link to="/Contato">Clique Aqui</Link>
          </div>
</div>



    );
};

export default Contato;
