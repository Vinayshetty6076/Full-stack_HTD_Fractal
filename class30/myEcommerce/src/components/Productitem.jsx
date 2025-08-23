import React, { useState } from "react";

const Productitem = ({ productData }) => {
  const [product, setProduct] = useState(productData);

  function handleIncrement(index) {
    const updatedData = [...productData];
    updatedData[index].total += 1;
    setProduct(updatedData);
  }
  function handleDecrement(index) {
    const updatedData = [...productData];
    if (updatedData[index].total > 0) {
      updatedData[index].total -= 1;
    }
    setProduct(updatedData);
  }
  return (
    <div>
      {productData.map((data, index) => (
        <div key={data.item} className="card m-1 w-50 p-3">
          <div className="card-body">
            <h5 className="card-title">{data.item}</h5>
            <h6 className="card-subtitle mb-2">&#x20B9; {data.price}</h6>
            <p className="card-text">
              <button
                className="btn btn-danger mx-3"
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              {data.total}
              <button
                className="btn btn-success mx-3"
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </p>
            <div className="card-footer">
              <strong>Total:  &#x20B9; {data.total*data.price} </strong>
            </div>
          </div>
        </div>
      ))}
      <br />
      <h2>
        Cart Total: 
        {productData.reduce((acc,curr)=>acc+curr.price*curr.total,0)}
      </h2>
    </div>
  );
};

export default Productitem;
