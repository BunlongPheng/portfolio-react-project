import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './styles/NavBar.css';

//function for responsive NavBar
function NavBar() {                               
  const [click, setClick] = useState(false); 
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton= () => {               //function to show/unshow button when the browser is zoom in/out
    if (window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() =>{    // to show smooth button transition when zoom in/out
    showButton();
  }, []);


  window.addEventListener('resize', showButton);
  return (
    <>

    <nav className="navbar">
      <div className="navbar-container"> 
        <Link to="/" className="navbar-logo">
          SNOW
          <i className='fa-solid fa-snowflake '/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>      
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to ='/' className='nav-links nav-item-text' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/services' className='nav-links nav-item-text' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/who-we-are' className='nav-links nav-item-text' onClick={closeMobileMenu}>
              Who We Are
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
              SIGN IN
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle ='btn--outline'>SIGN IN</Button>}
      </div>
    </nav>


    </>
  );
}

export default NavBar;
