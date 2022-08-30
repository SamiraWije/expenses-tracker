import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
    setShowForm(!showForm);
  };

  const handleForm = () => {
    setShowForm(!showForm);
  };

  const cancelHandler = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="new-expense">
      {!showForm && <button onClick={handleForm}>Add New Expense</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={cancelHandler}/>}
    </div>
  );
};

export default NewExpense;
