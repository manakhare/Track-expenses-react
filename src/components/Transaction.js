import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  console.log(sign);
  console.log(transaction.text);
  
  

  return (
    <li
      className={
        transaction.amount < 0
          ? "minus-border list-item"
          : "plus-border list-item"
      }
    >
      <div className="list--main-container">
        <div className="list--btn-container">
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="delete-btn"
          >
            x
          </button>
        </div>
        <div className="list--text-container">
          <div>
            {transaction.text}{" "}
          </div>
          <div>
            {sign} {Math.abs(transaction.amount)} Rs
          </div>
        </div>
      </div>
    </li>
  );
};

export default Transaction;

    // <li
    //   className={
    //     transaction.amount < 0
    //       ? "minus-border list-item"
    //       : "plus-border list-item"
    //   }
    // >
      
    //   {transaction.text}{" "}
    //   <span>
    //     {sign} {Math.abs(transaction.amount)} Rs
    //   </span>
    //   <button
    //     onClick={() => deleteTransaction(transaction.id)}
    //     className="delete-btn"
    //   >
    //     x
    //   </button>
    // </li>