import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!firstName) {
      errors.firstName = 'Please enter your first name';
    }

    if (!lastName) {
      errors.lastName = 'Please enter your last name';
    }

    if (!email) {
      errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {

      const userInfo = JSON.parse(localStorage.getItem('UserInfo')) || {};
      userInfo.firstName = firstName;
      userInfo.lastName = lastName;
      userInfo.email = email;
      localStorage.setItem('UserInfo', JSON.stringify(userInfo));

      // For now, you can log the data to the console
      console.log({ firstName, lastName, email, password });

      // Continue with your navigation logic
      navigate('/CreateProfile');
    } else {
      // There are validation errors, update the state with error messages
      setErrors(errors);
    }
  };

  return (
      <form className="signup-form">
        <div className="signup-form-name"> 
          <label htmlFor="firstName"><h2>First Name:</h2></label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={errors.firstName}

          />
                  <label htmlFor="lastName"><h2>Last Name:</h2></label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)
            }
            placeholder={errors.lastName}

          />
        </div>

      



        <div>
          <label htmlFor="email"><h2>Email:</h2></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={errors.email}

          />
        
        </div>
        <div>
          <label htmlFor="password"><h2>Password:</h2></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={errors.password}

          />
        </div>
        <div>
          <label htmlFor="confirmPassword"><h2>Confirm Password:</h2></label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={errors.confirmPassword}

          />
    
        </div>
        <button className="action-button" type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    );
  }
  export default SignUpForm;
