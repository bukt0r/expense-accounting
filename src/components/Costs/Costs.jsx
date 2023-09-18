import CostItem from "./CostItem"
import './Costs.css'
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('All')

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter(cost => {
            return cost.date.getFullYear().toString()===selectedYear
        })

    return (
        
        <Card className="costs">
            <CostsFilter year={selectedYear} 
            onChangeYear={yearChangeHandler}/>

            

            {selectedYear === 'All' ? (
                props.costs.map(cost => (
                <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
                ))
            ) : (filteredCosts.length !== 0) ? (
                filteredCosts.map(cost => (
                <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
                ))
                ) : (<p> В этом году расходов нет</p>)   
            }

        </Card>
        
    )
    
}


export default Costs;