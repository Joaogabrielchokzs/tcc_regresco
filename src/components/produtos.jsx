import React, { useState } from 'react';
import './produtos.scss';

const products = [
  {
    id: 1,
    name: 'Bolo de Chocolate',
    description: 'Delicioso bolo de chocolate com recheio cremoso.',
    price: 25.00,
    image: 'link-to-chocolate-cake-image.jpg',
    type: 'bolo',
  },
  {
    id: 2,
    name: 'Bolo de Baunilha',
    description: 'Bolo leve de baunilha com cobertura de chantilly.',
    price: 20.00,
    image: 'link-to-vanilla-cake-image.jpg',
    type: 'bolo',
  },
  {
    id: 3,
    name: 'Doces Individuais',
    description: 'Uma seleção de doces variados para você saborear.',
    price: 3.00,
    image: 'link-to-individual-sweets-image.jpg',
    type: 'doce',
  },
  {
    id: 4,
    name: 'Combo de Festas',
    description: 'Bolo + 12 doces individuais a um preço especial.',
    price: 70.00,
    image: 'link-to-party-combo-image.jpg',
    type: 'combo',
  },
];

const Products = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    console.log(`Adicionado ao carrinho: ${product.name}, Quantidade: ${quantity}`);
  };

  return (
    <div className="products-container">
      <h1>Nosso Cardápio de Produtos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">R$ {product.price.toFixed(2)}</p>
            <label>
              Quantidade:
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              />
            </label>
            {product.type === 'bolo' && (
              <>
                <label>
                  Peso (kg):
                  <input type="number" min="1" placeholder="Peso" />
                </label>
                <label>
                  Cor do Bolo:
                  <input type="text" placeholder="Ex: Vermelho" />
                </label>
              </>
            )}
            {product.type === 'doce' && (
              <label>
                Tipo de Doce:
                <input type="text" placeholder="Ex: Brigadeiro" />
              </label>
            )}
            <button className="view-button">Ver Produto</button>
            <button className="add-button" onClick={() => handleAddToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
