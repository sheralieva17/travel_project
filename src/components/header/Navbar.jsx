import React from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContextProvider';

const Navbar = () => {
    const navigate = useNavigate();
    const {logOut, user} = useAuthContext();
    const handleLogout = () => {
        logOut();
        navigate('/login');
    };
  return (
    <div>
    <div class="header">
  <div class="frame-70">
    <div class="frame-69">
      <div class="on-trip">On trip</div>
    </div>
    <div class="home">
      <li onClick={()=>navigate('/')} class="home2">Home</li>
      <li class="about">About</li>
      <li class="discover">Discover</li>
      <li class="contact">Contact</li>
    </div>
    <div class="login">
                    {user ? (
                        <>
                            <div class="login2">{user.email}</div>
                            <div class="frame-17" onClick={handleLogout}>
                                <div class="register">Logout</div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div class="login2" onClick={() => navigate('/login')}>Login</div>
                            <div class="frame-17" >
                                <div onClick={() => navigate('/register')} class="register">Register</div>
                            </div>
                        </>
                    )}
                </div>
  </div>
</div>


    </div>
  );
}

export default Navbar;
