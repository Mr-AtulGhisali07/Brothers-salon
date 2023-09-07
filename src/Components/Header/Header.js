import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';
import clasess from './Header.module.css';

const Header = () => {
  return (
    <section id={clasess.main_header}>
      <Link to="/">
          <img src="./Images/header-footer.png" alt="header-footer-logo" className={clasess.img_logo}/>
      </Link>
      <Navbar/>
    </section>
  );
};
export default Header;