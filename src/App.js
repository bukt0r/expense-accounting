import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id:'c1',
    date:new Date(2021, 11, 31),
    description: 'холодрильник',
    amount: 999.99,
  },
  {
    id:'c2',
    date:new Date(2022, 0, 13),
    description: 'компуктер',
    amount: 175.99,
  },
  {
    id:'c3',
    date:new Date(2022, 6, 22),
    description: 'радиво-няня',
    amount: 6.99,
  }
]

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS)
  
  

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts]
    });
    };
  
  
  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
