import React, { useState } from 'react';
import NavbarItem from './NavbarItem';
import classes from './Navbar.module.css';
import './navStyles.css';
import logo from '../../../assets/Icon-notepad.png';
import logFunc from '../Login/LoginLogoutFunc';

const Navbar = (props) => {

        
    const { login, logout } = logFunc();

    function logoutHandler() {
      logout()
    }
    
    const [isIconOpen, setIsIconOpen] = useState(false);

    const handleButtonClick = () => {
        setIsIconOpen(!isIconOpen);
    }
    

    

    return (
        <>
        <div className={`${classes.laptop}`}>
        <div className={`${classes.list}`}>
            <div className={`${classes.left}`}>
                <img src={logo} alt='logo' className={`${classes.logo}`} />
                <NavbarItem item='Resume-Builder' link='/' />
            </div>
            <div className={`${classes.right}`}>
                <NavbarItem item='Home' link='/' />
                <NavbarItem item='Profile' link='/profile' />
                {props.user ? <NavbarItem item='Logout' onLogout={logoutHandler} /> : <NavbarItem item='Login' link='/login' />}
            </div>
        </div>
        </div>
        <div className={`${classes.mobile}`}>

        <section className="mb-3">
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex flex-row">
            <button className="navbar-toggler second-button" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarToggleExternalContent10"
                aria-controls="navbarToggleExternalContent10" aria-expanded="false"
                aria-label="Toggle navigation" onClick={handleButtonClick}>
                <div className={`animated-icon2 ${isIconOpen ? 'open' : ''}`}><span></span><span></span><span></span><span></span></div>
            </button>
            <div className="d-flex justify-content-center">
            <NavbarItem item='Resume-Builder' link='/' />
            </div>
            </div>
        </nav>
            {isIconOpen ? (
            <>
            <div className="bg-dark shadow-3 p-4 d-flex justify-content-center">
            <NavbarItem item='Home' link='/'/>
            </div>
            <div className="bg-dark shadow-3 p-4 d-flex justify-content-center">

            <NavbarItem item='Profile' link='/profile'/>
            
            </div>
            
            <div className="bg-dark shadow-3 p-4 d-flex justify-content-center">
            {props.user ? 
            <NavbarItem item='Logout' onLogout={logoutHandler}/> 
            : <NavbarItem item='Login' link='/login'/>
            }
            </div>
            </>
            ) : <></>

            }
        
        </section>
        </div>
        </>
    )
}

export default Navbar;