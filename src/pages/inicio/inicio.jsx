import React from 'react';
import './inicio.scss';
import Cabegalho from '../cabegalho/cabegalho';
import Sonho from '../image/sonho.jpg';
import salgado from '../image/salgado.jpg';
import doces from '../image/miguel.webp';

const INICIO = () => {
  return (
    <div className='frasedeefeito'>
      <Cabegalho />
      <h1 className='h1'>Sabores da Rua</h1>
      <h2 className='text'>
        Transformando cada doce em uma celebração de sabores, onde a tradição se encontra com a inovação em cada fatia!
      </h2>
      <div className='sonho'>
        <img src={Sonho} alt="Sonho" />
      </div>
      <div className='salgado'>
        <img src={salgado} alt="Salgado" />
      </div>

      <div className='brigadeiro'>
        <img src={doces} alt="Doces Individuais"  />
      </div>


    </div>
  );
};

export default INICIO;
