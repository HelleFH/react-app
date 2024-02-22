import React from 'react';
import './css/App.css';
import './css/otherProfile.css'
import './css/index.css'
import './css/signUpPage.css'
import './css/footer.css'
import './css/userProfile.css'
import './css/findMatches.css'
import './css/createProfileForm.css'
import './css/buttons.css'
import './css/findMatchesModal.css'
import './css/userProfile.css'
import './css/favorites.css'


import Navbar from './components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import UserProfile from './pages/viewMyProfile';
import CreateProfile from './pages/CreateProfile';
import SignUp from './pages/signup';
import Favorites from './pages/favorites';
import IndividualProfile from './pages/individualProfile';
import FindMatches from './pages/FindMatches';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/viewMyProfile" element={<UserProfile />} />
        <Route path='/findmatches' element={<FindMatches />} />
        <Route path='/CreateProfile' element={<CreateProfile />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/individualProfiles/:id" element={<IndividualProfile />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/index' element={<Home />} />
        <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
