import "../CSS/NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveNewExpenseData = (newExpenseData) =>{
        const data = {
            ...newExpenseData,
            id: Math.random().toString()
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