import React from 'react';
import { NavLink } from 'react-router-dom';
import BentoListFilters from './BentoListFilters'
import '../styles/components/header.css'

const Header = () => (
        <header
        position="static"
        className = "header"
        >
        <h1
        className="header__title"
        > Bento </h1>
        <div
        className = "header__subtitle" >
        <NavLink to="/" activeClassName="active" className="link header__dashboard">Dashboard </NavLink>
        <NavLink to="/create" activeClassName="active"  className="link header__add-bento">Add Bento </NavLink>
        </div>

        <BentoListFilters 
        className="header__search"
        />

        </header>
)

export default Header;