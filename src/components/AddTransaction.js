import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(null);

  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);
  const lastId = transactions.length;

  const onTextChange = (e) => setText(e.target.value);
  const onAmountChange = (e) => setAmount(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: lastId + 1,
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <div className="new-transaction-container">
      <h3 className="new-transaction--title">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-ele">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={onTextChange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-ele">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={onAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="add-transaction-btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
