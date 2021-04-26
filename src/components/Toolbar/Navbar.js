import React, {useState} from 'react';
import './Navbar.css';
import {IoIosArrowDropleft} from "react-icons/io"

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false)

    return (
        <div className="navbar">
            <div className="leftside">
                <h1>UC...</h1>
            </div>
            <div className="rightside">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="#">Blogs</a>
                    <a href="#">Contact</a>
                </div>
                <IoIosArrowDropleft className="slider" onClick={() => setShowLinks(!showLinks)} />
            </div>
        </div>
    );

}

export default Navbar;