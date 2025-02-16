



import { useEffect, useState } from "react";
import Card from "../Card";


const AllCoffees = () => {
    const [coffees, setCoffees] = useState([]);


    useEffect(() => {
        fetch('/coffees.json')
        .then(res => res.json())
        .then(data => setCoffees(data))
    }, [])

    const handleSort = sortBy => {
        if(sortBy == 'rating') {
            const sorted = [...coffees].sort((a, b) => b.rating - a.rating);
            setCoffees(sorted)

        } 

        else if (sortBy == 'popularity') {
            const sorted = [...coffees].sort((a, b) => b.popularity - a.popularity);
            setCoffees(sorted)

        }
    }
  
   
    return (
      <div>
        {/* Sort coffees */}
        <div className="flex justify-between">
            <div>
                <h1 className="text-2xl font-semibold">Sort by popularity and rating:</h1>

            </div>
            <div className="space-x-2">
                <button onClick={() => handleSort('rating')} className=" btn btn-warning ">Sort by Rating</button>
                <button onClick={() => handleSort('popularity')} className=" btn btn-warning ">Sort by Popularity</button>

            </div>

        </div>
        {/* Display coffees */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
           {
            coffees.map(coffee => <Card key ={coffee.id} coffee ={coffee}/>)
           }
        </div>
        
      </div>
        //button to show all coffees
     
    );
};

export default AllCoffees;
