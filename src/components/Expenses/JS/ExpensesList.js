import React, {useState} from 'react';
import '../CSS/ExpensesList.css';
import ExpenseItems from './ExpenseItems';

const ExpensesList = (props) => {
    let content;

    if(props.expenses.length === 0){
        return (<h2 className="expenses-list__fallback">Found no expenses within this year.</h2>)
    }

    return (
        <ul className='expenses-list'>
            {props.expenses.map((expense, index) => 
                <ExpenseItems 
                    key={expense.id}
                    title={expense.title} 
                    amount = {expense.amount} 
                    date={expense.date}
                />)}
        </ul>
    )
};

export default ExpensesList;