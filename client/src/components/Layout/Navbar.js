import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/Auth';
import { Box } from '@material-ui/core';
import Icon from '../../img/favicon.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Profiles</Link>
      </li>
      <li>
        <Link to='/bentos'>Bento</Link>
      </li>
      <li>
        <Link to='/add-bento'>Create Bento</Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i /> <span>Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'> Profiles</Link>
      </li>
      <li>
        <Link to='/register'> Register</Link>
      </li>
      <li>
        <Link to='/login'> Login</Link>
      </li>
    </ul>
  );

  return (
    <nav>
      <Box boxShadow={3} position='static' className='header'>
        <h1>
          <Link to='/'>
            <i />
            <img src={Icon} alt='Bento' className='header__title.img' />
          </Link>
        </h1>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Box>
    </nav>
  );
};

Navbar.ProtoTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
