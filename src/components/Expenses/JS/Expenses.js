import { useState } from "react";
import "../CSS/Expenses.css";
import Card from '../../Global/JS/Card';
import ExpensesFilter from "../../FilterExpenses/JS/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenseYear = (year) => {
        setFilteredYear(year);
        console.log(year);
    };

    const filteredExpenses = props.ex.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return(
    <div>
        
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeExpenseYear={filterExpenseYear} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    </div>
    );
}

export default Expenses;