import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    console.log(isAuthenticated);
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div>
        <h1>BEN-TO</h1>
        <p>Welcome to Ben-to</p>
        <div>
          <Link to='/register'>Sign up </Link>
          <Link to='/Login'>Sign in</Link>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
