import React from "react";

import '../CSS/Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    let maxExp = 0;

    for(const exp of props.expenseData){
        maxExp = Math.max(maxExp, exp.value);
        console.log(maxExp);
    }
    return (
        <div className="chart">
            {props.expenseData.map((expense, key) => 
                <ChartBar 
                    key={expense.label}
                    value={expense.value} 
                    maxValue={maxExp} 
                    label={expense.label} 
                />)}
        </div>
    )

}

export default Chart;