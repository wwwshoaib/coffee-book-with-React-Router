import { useLoaderData, useNavigate, useParams } from "react-router";

import Card from "../Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const coffeeData =  useLoaderData();
    const { category } = useParams();
    const navigate = useNavigate();
  
    const [coffees, setCoffees] = useState([]);
    useEffect (() => {
       if (category) {
        const filteredByCategory = [...coffeeData].filter(coffee => coffee.category === category);
        setCoffees(filteredByCategory);
       }
       else {
        setCoffees(coffeeData.slice(0, 6));
       }
    }, [coffeeData, category])
   
    return (
      <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
           {
            coffees.map(coffee => <Card key ={coffee.id} coffee ={coffee}/>)
           }
        </div>
        <button onClick={() => navigate('/coffees')}  className="btn btn-warning"  >View all</button>
      </div>
        //button to show all coffees
     
    );
};

export default CoffeeCards;
