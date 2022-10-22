import "../CSS/Expenses.css";
import Card from '../../Global/JS/Card';
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "../../FilterExpenses/JS/ExpenseFilter";
import { useState } from "react";

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenseYear = (year) => {
        setFilteredYear(year);
        console.log(year);
    };

    return(
    <div>
        
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeExpenseYear={filterExpenseYear} />
            <ExpenseItems title={props.ex[0].title} amount = {props.ex[0].amount} date={props.ex[0].date}/>
            <ExpenseItems title={props.ex[1].title} amount = {props.ex[1].amount} date={props.ex[1].date}/>
            <ExpenseItems title={props.ex[2].title} amount = {props.ex[2].amount} date={props.ex[2].date}/>
        </Card>
    </div>
    );
}

export default Expenses;