import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/Profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    status: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    fieldofstudy: '',
    department: '',
    school: ''
  });

  const [displaySocialInputs, toggleSocialInput] = useState(false);

  const {
    status,
    bio,
    twitter,
    facebook,
    youtube,
    instagram,
    fieldofstudy,
    department,
    school
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <h1>Create Your Profile</h1>
      <p>
        <i /> Let's get some information to make your profile stand out
      </p>
      <small>* = required field</small>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Select Status</option>
            <option value='Student'>Student</option>
            <option value='Instructor'>Instructor or Teacher</option>
            <option value="Teacher's assistant">Teacher's assistant</option>
            <option value='Intern'>Intern</option>
            <option value='Merchant'>Merchant</option>
            <option value='Other'>Other</option>
          </select>
          <small>Give us an idea of where you are at in your career</small>
        </div>
        <div>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          />
          <small>Tell us a little about yourself</small>
        </div>

        <div>
          <button
            onClick={() => toggleSocialInput(!displaySocialInputs)}
            type='button'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div>
              <i />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div>
              <i />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div>
              <i />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div>
              <i />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' />
        <Link to='/dashboard'> Go Back</Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
