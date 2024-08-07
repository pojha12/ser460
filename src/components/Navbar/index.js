import React, { useState } from 'react';
import "./styles.css";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
      const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false)
      };


    return (
        <div className='navbar'>

            <div className="profile-container">
                <button className="icon" onClick={toggleMenu}>
                    <RxAvatar />
                </button>
                {isOpen && (
                <ul className='dropdown-menu'>
                    <li>
                    <button onClick={() => handleNavigation('/publish')}>Add meal</button>
                    </li>
                    <li>
                    <button onClick={() => handleNavigation('/subscribe')}>Subscription</button>
                    </li>
                </ul>
                )}
            </div>

        </div>
    )
}

export default Navbar;