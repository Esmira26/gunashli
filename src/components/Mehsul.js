import React from 'react';

function Mehsul({ p, delProduct, addSebet }) {
  return (
    <div className="elan2">
      <img src={`https://localhost:7039/img/${p.productImg}`} alt={p.productImg} />
      <div className="elan3">
        <p>Sahəsi : <span>{p.productFiled}</span></p>
        <h3>Otaq sayı : <span>{p.productRoom}</span></h3>
        <h4>Qiymət : <span>{p.productPrice}</span></h4>
        <button onClick={() => addSebet(p)}>Səbətə at</button>
        <i className="fa-regular fa-trash-can" onClick={() => delProduct(p.productId)}></i>
      </div>
    </div>
  );
}

export default Mehsul;