import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1> Ben-to </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Bento </NavLink>

    </header>
)

export default Header;