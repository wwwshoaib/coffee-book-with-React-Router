

import AllCoffees from "../components/AllCoffees/AllCoffees";
import Banner from "../components/Banner/Banner";
import Heading from "../components/Heading/Heading";



const Coffees = () => {
    return (
        <div>
             {/* Banner */}
             <Banner />
            {/* Headings */}
            <Heading title='Coffees of all categories here' subtitle='"Discover Your perfect and desired brand coffee"' />
            <AllCoffees></AllCoffees>
          
                
            
        </div>
    );
};

export default Coffees;