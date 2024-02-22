import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';

function ProfileCreationForm() {
  const navigate = useNavigate();

  const [selectedLookingFor, setSelectedLookingFor] = useState('');
  const [selectedChildren, setSelectedChildren] = useState('');
  const [selectedZodiac, setSelectedZodiac] = useState('');
  const [selectedAlcohol, setSelectedAlcohol] = useState('');
  const [selectedSmoking, setSelectedSmoking] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [birthdate, setBirthdate] = useState('');
  const [occupation, setOccupation] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const formData = JSON.parse(localStorage.getItem('UserInfo')) || {};
  
  useEffect(() => {
    const {
      selectedChildren = '',
      selectedLookingFor = '',
      selectedZodiac = '',
      selectedAlcohol = '',
      selectedSmoking = '',
      selectedEducation = '',
      firstName = '',
      lastName = '',
      email = '',
      birthdate = '',
      description = '',
      phone = '',
      postcode = '',
      city = '',
      profilePhoto = null,
      selectedInterests = [],
    } = formData;
  
    setSelectedChildren(selectedChildren);
    setSelectedLookingFor(selectedLookingFor);
    setSelectedZodiac(selectedZodiac);
    setSelectedAlcohol(selectedAlcohol);
    setSelectedSmoking(selectedSmoking);
    setSelectedEducation(selectedEducation);
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setBirthdate(birthdate);
    setDescription(description);
    setPhone(phone);
    setPostcode(postcode);
    setCity(city);
    setProfilePhoto(profilePhoto);
    setSelectedInterests(selectedInterests);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result;
      localStorage.setItem('profilePhoto', base64Image);
      setProfilePhoto(base64Image);
    };

    reader.readAsDataURL(file);
  };

  const validateForm = () => {
    const errors = {};
  
    if (!profilePhoto) {
      errors.profilePhoto = 'Photo is required';
    }
  
    if (!firstName) {
      errors.firstName = 'Please enter your first name';
    }
  
    if (!lastName) {
      errors.lastName = 'Please enter your last name';
    }
  
    if (!email) {
      errors.email = 'Please enter your email';
    }
  
    if (!birthdate) {
      errors.birthdate = 'Please enter your birthdate';
    }
    if (!postcode) {
      errors.postcode = 'Please enter your postcode';
    }
    if (!city) {
      errors.city = 'Please enter your city';
    }
    return errors;
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {

      const formDataToStore = {
        selectedChildren,
        selectedZodiac,
        selectedAlcohol,
        selectedSmoking,
        selectedInterests,
        selectedEducation,
        selectedLookingFor,

        firstName,
        lastName,
        email,
        phone,
        postcode,
        city,
        profilePhoto,
        birthdate,
        occupation,
        description,

      };

      localStorage.setItem('UserInfo', JSON.stringify(formDataToStore));

      navigate('/viewMyProfile');
    } else {
      setErrors(errors);
    }
  };


  const interestOptions = [
    'Photography',
    'Traveling',
    'Fitness and training',
    'Yoga',
    'Music',
    'Arts and crafts',
    'Literature',
    'Cooking',
    'Painting',
    'Animals',
    'Fashion and design',
    'Volunteering and charity work',
    'Hiking and outdoor activities',
    'Astrology',
    'Technology',
    'Programming',
    'Psychology',
    'Marketing',
    'Data science',
    'Fashion design',
    'Environmental science',
  ];


  return (
      <ProfileForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        postcode={postcode}
        city={city}
        occupation={occupation}
        description={description}

        selectedChildren={selectedChildren}
        selectedInterests={selectedInterests}
        selectedZodiac={selectedZodiac}
        selectedAlcohol={selectedAlcohol}
        selectedSmoking={selectedSmoking}
        selectedEducation={selectedEducation}
        selectedLookingFor={selectedLookingFor}

        errors={errors}
        profilePhoto={profilePhoto}
        handleLastNameChange={(event) => setLastName(event.target.value)}
        handleFirstNameChange={(event) => setFirstName(event.target.value)}
        handlePhoneChange={(event) => setPhone(event.target.value)}
        handleEmailChange={(event) => setEmail(event.target.value)}
        handlePostcodeChange={(event) => setPostcode(event.target.value)}
        handleCityChange={(event) => setCity(event.target.value)}
        handleChildrenChange={(event) => setSelectedChildren(event.target.value)}
        handleZodiacChange={(event) => setSelectedZodiac(event.target.value)}
        handleSmokingChange={(event) => setSelectedSmoking(event.target.value)}
        handleAlcoholChange={(event) => setSelectedAlcohol(event.target.value)}
        handleEducationChange={(event) => setSelectedEducation(event.target.value)}
        handleBirthdateChange={(event) => setBirthdate(event.target.value)}
        handleLookingForChange={(event) => setSelectedLookingFor(event.target.value)}

        handleOccupationChange={(event) => setOccupation(event.target.value)}
        handleDescriptionChange={(event) => setDescription(event.target.value)}


        handleFileUpload={handleFileUpload}
        handleInterestClick={(interest) => {
          const isInterestSelected = selectedInterests.includes(interest);
          const newInterests = isInterestSelected
            ? selectedInterests.filter((item) => item !== interest)
            : [...selectedInterests, interest];
          setSelectedInterests(newInterests);
        }}
        handleFormSubmit={handleFormSubmit}
        interestOptions={interestOptions}
      />
  );
}

export default ProfileCreationForm;
