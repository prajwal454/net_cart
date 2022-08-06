import React, { useState } from "react";
import Footer from "../Footer/Footer";
import AddProducts from "./AddProducts";
import Products from "./Products";

export default function Items() {
  const item = [
    {
      name: "Sumsung-Galaxy",
      price: 15000,
      quantity: 0,
    },
    {
      name: "Redmi-U11 NOTE",
      price: 20000,
      quantity: 0,
    },
  ];

  const [itemsList, setItemsList] = useState(item);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newItemsList = [...itemsList];
    let newTotalAmount = totalAmount;

    newItemsList[index].quantity++;

    newTotalAmount += newItemsList[index].price;

    setItemsList(newItemsList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newItemsList = [...itemsList];
    let newTotalAmount = totalAmount;
    if (newItemsList[index].quantity > 0) {
      newItemsList[index].quantity--;
      newTotalAmount -= newItemsList[index].price;
    }

    setItemsList(newItemsList);
    setTotalAmount(newTotalAmount);
  };

  const resetButton =()=>{
    let newItemsList = [...itemsList];
    newItemsList.map((index)=>{
        index.quantity=0
    })
    setItemsList(newItemsList)
    setTotalAmount(0)
  }
 
   const removeButton =(index)=>{
    let newItemsList = [...itemsList];
    let newTotalAmount =totalAmount;

    newTotalAmount -= newItemsList[index].quantity * newItemsList[index].price

    newItemsList.splice(index, 1)

    setItemsList(newItemsList)
    setTotalAmount(newTotalAmount)
   }

   const addItems =(name,price)=>{
    let newItemsList = [...itemsList]
    newItemsList.push({
      name:name,
      price:price,
      quantity:0
    })

    setItemsList(newItemsList)
   }

  return (
    <div className="mx-5 my-5">
      <AddProducts addItems={addItems}/>
      {itemsList.map((product, i) => {
        return (
          <Products
            pro_var={product}
            key={i}
            incrementQuantity={incrementQuantity}
            index={i}
            decrementQuantity={decrementQuantity}
            removeButton={removeButton}

          />
        );
      })}
      <Footer totalAmount={totalAmount} resetButton={resetButton}/>
    </div>
  );
}
