import React from 'react';

function Coin({ name, image, symbol, price, priceChange, marketcap }) {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>{' '}
          {priceChange < 0 ? (
            <p className='coin-percend red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percend green'>{priceChange.toFixed(2)}%</p>
          )}
          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
