import React, { useState } from 'react'
import Child from '../child/Child';

export default function Perant() {
    const [products, setProducts] = useState([
        { id:1,name:'iphone',price:3000,onSale:true},
        { id:2,name:'2phone',price:4000,onSale:false},
        { id:3,name:'3phone',price:5000,onSale:false},
        { id:4,name:'4phone',price:6000,onSale:true},
        { id:5,name:'5phone',price:7000,onSale:true},
    ]);

  function deleteProd(id) {
    let newProduct = [...products]
    newProduct=newProduct.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(newProduct);
  }
  
  function incrementPrice(users) {
    let indePrice = products.indexOf(users);
    let newpriceArr = [...products];
    newpriceArr[indePrice].price++;
    setProducts(newpriceArr)
    
  }
  
    return (
      <>
        <h2>parent</h2>
        <div className="container">
          <div className="row">
            {products.map((prod, index) => (
              <Child key={index} users={prod} deleteProduct={deleteProd} incrementPriceFun={incrementPrice}></Child>
            ))}
          </div>
        </div>
      </>
    );
}
