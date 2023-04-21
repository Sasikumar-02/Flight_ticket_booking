import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  width: 1500px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #000;
  height: 90px;
  display: flex;
  justify-content: space-around;
  z-index: 10;
  box-shadow: 0px 1px 10px #999 ;
`;
export const NavLink = styled(Link)`
  font-size:20px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
`;

export const NavMenu = styled.div`
  display: flex;
  
  
`;

export const NavBtn = styled.nav`
  display: block;
  margin-top:20px;
  margin-right: -120px;
  margin-left:150px;
`;

export const NavBtnLink = styled(Link)` 
margin: 30px 30px 30px 30px 
border-radius: 4px;
background: #256ce1;
padding: 10px 45px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
text-align: center;
transition: all 0.2s ease-in-out;
text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;