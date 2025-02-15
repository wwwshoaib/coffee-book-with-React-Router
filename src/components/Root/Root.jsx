
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-120px)] container mx-auto px-12 py-12">
            <Outlet ></Outlet>
            </div>
            <Footer></Footer>
            
            
           
          
        </div>
    );
};

export default Root;