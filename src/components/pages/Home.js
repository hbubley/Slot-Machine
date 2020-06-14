import React from "react";
import AllCharacters from "../character/AllCharacters";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome To Darwin!</h1>
            <h3>Survival of the fittest... with a twist</h3>
            <img
                src="https://res.cloudinary.com/dum4u7sro/image/upload/v1592065664/Untitled_design_1_w8jyxd.png"
                alt="Darwin Logo"
            />
            <Link to="/darwin">
                <h1 className="btn btn-highlight m-1">Try your luck</h1>
            </Link>
        </div>
    );
};

export default Home;
