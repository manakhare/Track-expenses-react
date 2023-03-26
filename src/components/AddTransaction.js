import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);
  const lastId = transactions.length;
  //   const lastId = transactions.reduct((acc, item) => (acc=item), 0);

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
