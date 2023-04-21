import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import './navbar.css';
//imported icons
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'

//imported images
import logo from '../../images/logo.png';
 
const Navbar = () => {
  return (
    <div className="navBars">
      <Nav>
        <NavLink to="/">
        
          <img
            src={require("../../images/logo.png")}
            alt="logo"
            style={{ width: "125px", height: "120px", marginRight: "50px" }}
          />
          <h3>SK Ticket Booking System</h3>
        </NavLink>
        
        <NavMenu>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/contact-us">Contact</NavLink>
          <NavLink to="/BookTicket">Flights</NavLink>
          <NavBtn>
          <Dropdown >
            <Dropdown.Toggle id="dropdown-basic" style={{fontSize:'20px',marginTop:'-10px',marginRight:'20px',height:'48px', padding:"0px 0px 0px 0px"}}>Client Login</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item ><Link to='/sign-up'>Sign Up</Link></Dropdown.Item>
                <Dropdown.Item ><Link to='/CustomerSignin'>Sign In</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </NavBtn>
          <NavBtn>
          <Dropdown >
            <Dropdown.Toggle id="dropdown-basic" style={{fontSize:'20px',marginTop:'-10px',marginRight:'130px',height:'48px'}}>Admin Login</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item ><Link to='/signin'>Sign In</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </NavBtn>
        </NavMenu>  
      </Nav>
      </div> 
  );
};

export default Navbar;
