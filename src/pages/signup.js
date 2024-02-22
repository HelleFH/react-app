import React from 'react';
import SignUpForm from '../components/SignUpForm'; // Update the import path

function SignUp() {
  return (
    <div className='landing-page-content'>

      <div className='landing-page-header'>
        <div className='home-logo'>  <img src="./images/logo.png" /></div>
        <div className='signup-form-header-container'>
          <h3> Fill out the form below to create your free account!
          </h3>
        </div>
      </div>

      <div className="signup-form-container">
       

        <SignUpForm />

      </div>
    </div>
  );
}

export default SignUp;