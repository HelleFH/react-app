
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
    return (

        <div className='landing-page-content'>

            <div className='landing-page-header'>
                <div className='home-logo'>  <img src="./images/logo.png" /></div>
                
            </div>
            <div>
            <div className='home-text'>

<p >Welcome to 'For Life' - where swiping right means planning your future,
    not just your evening! <br></br><br></br>
    Join us today and let's write your 'happily ever after' story together! 💑💍💖

</p>
<button className='action-button'>
    <Link to="/sign-up" className="signup-button">Sign up now!</Link>
</button>
</div>
            <div className='home-profile-photos'>
                <div><img src="./images/profile-photos/user-image(1).png" /></div>
                <div><img src="./images/profile-photos/user-image(5).png" /></div>
                <div><img src="./images/profile-photos/user-image(10).png" /></div>
                <div><img src="./images/profile-photos/user-image(17).png" /></div>

                <div><img src="./images/profile-photos/user-image(18).png" /></div>
                <div><img src="./images/profile-photos/user-image(11).png" /></div>
                <div><img src="./images/profile-photos/user-image(9).png" /></div>

                <div><img src="./images/profile-photos/user-image(19).png" /></div>
            </div>
        </div>
        </div>
    );
};

export default Home;

