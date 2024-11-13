import React from 'react'
import logo from '../assets/Mask Group.jpg'
import location from '../assets/map-marker-alt.png'
import search from '../assets/Search.png';
import user from '../assets/user.png';
const Header = () => {
  return (
    <div className='header-container'>
<div className='header-logo'>
    <img  className='logo-main icon' src={logo} alt="" /> <span style={{color:"#F17228"}}>food</span><span style={{color:"#FFB30E"}}>Wagon</span>
  
</div>
<div className='header-nav'>
<div className='location-box'>
Deliver to: <span style={{fontWeight:"lighter"}}>
    <img className='icon' src={location} alt="" />
    </span><span style={{fontWeight:"400"}}>Current Location</span> Mohammadpur Bus Stand, Dhaka
</div>
<div className='search-box'>
  <img className='icon'  src={search} alt="" />
<input type="text" placeholder='Search food' />
</div>
<div className='login-box'>
<button className='btn-login'>
  <img className='icon' style={{width:"12px",
    height:"12px"}} src={user} alt="" />
  Login</button>
</div>
</div>
    </div>
  )
}

export default Header