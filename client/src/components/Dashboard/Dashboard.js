import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { getCurrentProfile, deleteAccount } from '../../actions/Profile';
import { getBentos } from '../../actions/Bento';
import Favorite from './Favorite';
import Mybento from './myBento';
import Spinner from '../Layout/Spinner';
import DashboardAction from './DashboardAction';

const Dashboard = ({
  getCurrentProfile,
  getBentos,
  bento: { bentos },
  auth: { user },
  profile: { profile, loading },
  deleteAccount
}) => {
  useEffect(() => {
    getCurrentProfile();
    getBentos();
  }, [getCurrentProfile, getBentos]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Dashboard</h1>
      <p>
        <i /> Welcome {user && user.name}
      </p>
      <div>
        <span>{user && user.email}</span>
      </div>
      {profile !== null ? (
        <Fragment>
          <div>
            <h1>Favorite</h1>
            {profile.favorites.length === 0 ? (
              <p> No bento </p>
            ) : (
              profile.favorites &&
              profile.favorites.map(favorite => {
                return (
                  <Paper elevation={2} key={favorite._id}>
                    <Favorite key={favorite._id} bento={favorite} />
                  </Paper>
                );
              })
            )}
          </div>
          <div>
            <h1>My Bentos</h1>
            {bentos.length === 0 ? (
              <p> No bento </p>
            ) : (
              bentos &&
              bentos.map(bento => {
                return (
                  <Paper elevation={2} key={bento._id}>
                    <Mybento key={bento._id} bento={bento} />
                  </Paper>
                );
              })
            )}
          </div>
          <div>
            <DashboardAction />
            <button onClick={() => deleteAccount()}>
              <i /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile'>Create Profile</Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  getBentos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  bento: state.bento
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
  getBentos
})(Dashboard);
