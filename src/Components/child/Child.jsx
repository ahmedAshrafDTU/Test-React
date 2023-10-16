import React from "react";

export default function Child({ users, deleteProduct, incrementPriceFun }) {
  let { id, name, price, onSale } = users;

  return (
    <div className="card col-md-3 p-5 text-center">
      <h2>{id}</h2>
      <h2 className="card-title">{name}</h2>
      <h2 className="card-body">{price}</h2>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteProduct(id);
        }}
      >
        Deleid
      </button>
      <button
        className="btn btn-primary"
        onClick={() => incrementPriceFun(users)}
      >
        update
      </button>
      {onSale ? (
        <h2 className="btn btn-warning top-0 end-0 position-absolute">Sale</h2>
      ) : (
        ""
      )}
    </div>
  );
}
