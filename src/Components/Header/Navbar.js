import React, { useState } from 'react'
import classes from"./Navbar.module.css";
import { Link } from "react-router-dom";
import {CgMenu,CgClose} from "react-icons/cg";
import { HashLink  } from 'react-router-hash-link';

const Navbar = () => {

  const [openMenu,setOpenMenu]=useState(false);

  return (    
    <section id={classes.main_navbar}>
      <nav className={openMenu ? classes.active :""}>
        <ul className={classes.navbar_list}>
          <li  className="nav-item" >
            <HashLink className={classes.navbar_link} to="/#"  onClick={()=>setOpenMenu(false)}> HOME</HashLink>
          </li>

          <li  className="nav-item" >
            <HashLink className={classes.navbar_link} to="/about#"  onClick={()=>setOpenMenu(false)}> ABOUT </HashLink>
          </li>

          <li  className="nav-item" >
            <HashLink className={classes.navbar_link} to="/collection#"  onClick={()=>setOpenMenu(false)}> COLLECTION </HashLink>
          </li> 
             
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle hover" role='dropdown' to="#"  data-bs-toggle="dropdown" aria-expanded="false" id={classes.link_dropdown} >SERVISES</Link>
            <ul className="dropdown-menu" >
              <li><Link id={classes.link_gents} className='dropdown-item' to="/gents"  onClick={()=>setOpenMenu(false)}>GENTS</Link></li>
              <li><Link id={classes.link_ladies}  className='dropdown-item' to="/ladies"  onClick={()=>setOpenMenu(false)} >LADIES</Link></li>
            </ul>
          </li>

          <li>
            <HashLink className={classes.navbar_link} to="/contact#"  onClick={()=>setOpenMenu(false)}> CONTACT </HashLink>
          </li>
        </ul>
        <div className={classes.mobail_nav_btn}>
          <CgMenu name="menu-outline" className={classes.mobile_nav_icon}
          onClick={()=>setOpenMenu(true)}/>
          <CgClose name="close-outline" id={classes.close_outline} className={classes.mobile_nav_icon}
          onClick={()=>setOpenMenu(false)}/>
        </div>    
      </nav>
    </section>
  );
};
export default Navbar;