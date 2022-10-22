import '../CSS/ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../../Global/JS/Card';
import React, {useState} from 'react';

function ExpenseItems(props){
    const [title, setTitle] = useState(props.title);
    
    const changeTitle = () => {
        setTitle("PS5");
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={changeTitle}>Change Title</button>
        </Card>
    );
}

export default ExpenseItems;