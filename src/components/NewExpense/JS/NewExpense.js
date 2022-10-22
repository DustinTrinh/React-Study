import "../CSS/NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveNewExpenseData = (newExpenseData) =>{
        const data = {
            id: Math.floor(Math.random()*90000) + 10000,
            ...newExpenseData
        };
        props.newExpenseGetter(data);
    };

    return (
        <div className="new-expense">
            <ExpenseForm addNewExpenseData={saveNewExpenseData}/>
        </div>
    );
};

export default NewExpense;