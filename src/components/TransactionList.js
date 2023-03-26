import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
//we can pull anything form GlobalContext using useContext hook

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  //   console.log(context);
  return (
    <div className="history">
      <h3 className="history-title">History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
