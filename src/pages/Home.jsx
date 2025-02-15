import { useLoaderData } from "react-router";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import Heading from "../components/Heading/Heading";
import { Outlet } from "react-router";



const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* Banner */}
            <Banner />
            {/* Headings */}
            <Heading title='Browse Coffees by Category' subtitle='"Discover Your Perfect Brew: From Single-Origin to Blends and Beyond"' />
            {/* categories tab section */}
            <Categories categories = {categories}/>
          
          
            {/* Dynamic nested components */}
            <Outlet/>

        </div>
    );
};

export default Home;