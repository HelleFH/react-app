
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSmoking, faPen, faChild, faCoffee, faBeer, faCocktail, faStar, faBaby } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons


function Favorites() {
  const [favoritedProfiles, setfavoritedProfiles] = useState(JSON.parse(localStorage.getItem('favoritedProfiles')) || []);
  const [filteredProfiles, setFilteredProfiles] = useState(favoritedProfiles);
  const [hasChildrenFilter, setHasChildrenFilter] = useState("All");
  const [smokingFilter, setSmokingFilter] = useState("All");
  const [drinkingFilter, setDrinkingFilter] = useState("All");
  const [zodiacFilter, setZodiacFilter] = useState("All");

  const uniqueSmokingHabits = ["All", ...new Set(favoritedProfiles.map(profile => profile.smoking_habits))];
  const uniqueAlcoholHabits = ["All", ...new Set(favoritedProfiles.map(profile => profile.alcohol_habits))];
  const uniqueZodiacSigns = ["All", ...new Set(favoritedProfiles.map(profile => profile.zodiac_sign))];


  useEffect(() => {
    // Filtering logic based on favoritedProfiles and filter criteria
    const filtered = favoritedProfiles.filter((profile) => {
      // Your filtering conditions here
      const childrenCount = parseInt(profile.children, 10);
      const childrenMatch =
        (hasChildrenFilter === "All") ||
        (hasChildrenFilter === "Yes" && childrenCount > 0) ||
        (hasChildrenFilter === "No" && childrenCount === 0);
      const smokingMatch =
        (smokingFilter === "All") ||
        profile.smoking_habits === smokingFilter;
      const drinkingMatch =
        (drinkingFilter === "All") ||
        profile.alcohol_habits === drinkingFilter;
      const zodiacMatch =
        (zodiacFilter === "All") ||
        profile.zodiac_sign === zodiacFilter;

      return childrenMatch && smokingMatch && drinkingMatch && zodiacMatch;
    });

    setFilteredProfiles(filtered);
  }, [favoritedProfiles, hasChildrenFilter, smokingFilter, drinkingFilter, zodiacFilter]);

  const childrenFilterOptions = ["All", "Yes", "No"];

  const handleChildrenFilterChange = (event) => {
    setHasChildrenFilter(event.target.value);
  };

  const handleSmokingFilterChange = (event) => {
    setSmokingFilter(event.target.value);
  };

  const handleDrinkingFilterChange = (event) => {
    setDrinkingFilter(event.target.value);
  };

  const handleZodiacFilterChange = (event) => {
    setZodiacFilter(event.target.value);
  };
  const handleViewProfileClick = (profile) => {
    // Store the selected profile in localStorage
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
  };


  return (
    <div className="favorites-content">
      <h1>Your favorites</h1>


      <div className="favorites-list">
        <div className="favorites-list-filters">
          <h2>Filter profiles</h2>

          <div  >

            <label htmlFor="childrenFilter">Filter by Children:</label>
            <select id="childrenFilter" value={hasChildrenFilter} onChange={handleChildrenFilterChange}>
              {childrenFilterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="smokingFilter">Filter by Smoking Habits:</label>
            <select id="smokingFilter" value={smokingFilter} onChange={handleSmokingFilterChange}>
              {uniqueSmokingHabits.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="drinkingFilter">Filter by Drinking Habits:</label>
            <select id="drinkingFilter" value={drinkingFilter} onChange={handleDrinkingFilterChange}>
              {uniqueAlcoholHabits.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="zodiacFilter">Filter by Zodiac Sign:</label>
            <select id="zodiacFilter" value={zodiacFilter} onChange={handleZodiacFilterChange}>
              {uniqueZodiacSigns.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="favorite-profiles">
          {filteredProfiles.map((profile) => (

            <div key={profile.id} className="other-profile">
              <div className="other-profile-personal-info">

                <img src={profile.image} alt={`${profile.name}'s profile`} />

                <h3>
                  {profile.name}, {profile.age}
                </h3>

                <h4>
                  {profile.occupation} - {profile.location}
                </h4>
                <div className="other-profile-interest-list-container">
                  <h4>Interests:</h4>

                  <ul className="other-profile-interest-list">
                    {profile.interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </div>

              </div>
              <div className='additional-info'>
                <div>
                  <FontAwesomeIcon icon={faBaby} /><p>{profile.children}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faSmoking} /> <p>{profile.smoking_habits}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCocktail} /><p> {profile.alcohol_habits}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} /><p>{profile.zodiac_sign}</p>
                </div>
                <div>
                  <p>{profile.profile_text.substring(0, 159)}...</p>
                </div>
                <div className="other-profile-buttons">
                <button className="otherProfile-button" onClick={() => handleViewProfileClick(profile)}>

<Link to={`/individualProfiles/${profile.id}`}>
  View Profile
</Link>
</button>
</div>
              </div>

         

            </div>
          ))}
        </div>

      </div>
    </div>
  );

}

export default Favorites;
