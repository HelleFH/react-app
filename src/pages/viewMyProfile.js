import React, { useEffect, useState } from 'react';
import { FaUser, FaPerson, FaBriefcase, FaUserPolice, FaPhone, FaMapMarker, FaEnvelope, FaChild, FaSmoking, FaGraduationCap, FaWineGlass, FaStar, FaListUl, FaBaby, FaCocktail } from 'react-icons/fa'; // Import Font Awesome icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function UserProfile() {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    city: '',
    selectedChildren: '',
    selectedSmoking: '',
    selectedEducation: '',
    selectedAlcohol: '',
    selectedZodiac: '',
    selectedInterests: [],
    profilePhoto: '',
    birthday: '',
    description: '',
    occupation:'',
  });

  useEffect(() => {
    // Retrieve user information from local storage
    const userInfo = JSON.parse(localStorage.getItem('UserInfo')) || {};

    // Check if user information exists in local storage
    if (userInfo) {
      setProfileData(userInfo);
    }
  }, []);

  return (
    <div className='myProfile'>
      {profileData.firstName && (
        <h1>Welcome, {profileData.firstName}!</h1>
      )}


<div className='myProfile-personal-details'>
<h2>Your contact information</h2>

<div className='profile-photo'>  {profileData.profilePhoto && (
          <img src={profileData.profilePhoto} alt="Profile Preview" />
        )}</div>
      <div className='myProfile-contact-info'>
      {profileData.firstName && (
          <p>
          <span><FaUser />  </span> {profileData.firstName} &nbsp;{profileData.lastName}
          </p>
        )}
        {profileData.email && (
          <p>
          <span>  <FaEnvelope /> </span><span>{profileData.email}</span>
          </p>
        )}
        {profileData.phone && (
          <p>
           <span> <FaPhone />  </span><span>{profileData.phone}</span>
          </p>
        )}
        {profileData.postcode && (
          <p>
            <span><FaMapMarker /></span><span>{profileData.postcode}, {profileData.city}</span> 
          </p>
        )}
        {profileData.city && (
          <p>
     <span></span> 
          </p>
        )}
      </div>
      </div>

      <div className="myProfile-user-info">
        <h2>Additional information</h2>
        {profileData.description && (
          <p className='myProfile-profile-text'><span>Profile text:</span><span>{profileData.description}</span></p>
        )}
        <div className='selected-myProfile-user-info'>
        {profileData.selectedChildren && (
          <p>
        <span>    <FaBaby /> Children: </span><span>{profileData.selectedChildren}</span>
          </p>
        )}
          {profileData.occupation && (
          <p>
            <span><FaBriefcase /> Job:</span> <span>{profileData.occupation}</span>
          </p>
        )}

        {profileData.selectedSmoking && (
          <p>
          <span> <FaSmoking /> Smoking: </span> <span>{profileData.selectedSmoking}</span>
          </p>
        )}

        {profileData.selectedEducation && (
          <p>
            <span><FaGraduationCap /> Education:</span> <span>{profileData.selectedEducation}</span>
          </p>
        )}

        {profileData.selectedAlcohol && (
          <p>
           <span> <FaCocktail /> Alcohol:</span> <span>{profileData.selectedAlcohol}</span>
          </p>
        )}

        {profileData.selectedZodiac && (
          <p>
           <span> <FaStar /> Zodiac:</span> <span>{profileData.selectedZodiac}</span>
          </p>
        )}
        </div>

        {profileData.selectedInterests && profileData.selectedInterests.length > 0 && (
          <div>
       
         <h2>Interests:</h2>

            <ul className="myProfile-interests">
              {profileData.selectedInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="myProfile-buttons">
        <Link to="/CreateProfile">
          <button className='myProfile-button'>Edit</button>
        </Link>
        <Link to="/findMatches">
          <button className='myProfile-button'>Find Matches</button>
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;
