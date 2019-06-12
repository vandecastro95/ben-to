import React from 'react';
import { NavLink } from 'react-router-dom';
import BentoListFilters from './BentoListFilters'
import '../styles/components/header.css'
import Icon from '../styles/components/favicon.png';

const Header = () => (
        <header
        position="static"
        className = "header"
        >
        <div>
        <img src={Icon} alt='Bento' className="header__title.img"/>
        </div>
        </header>
)

export default Header;