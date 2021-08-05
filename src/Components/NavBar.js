import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../IMG/logo.png';
import DropDown from './DropDown';

function NavBar() {
    return (
        <div className='navBar'>
            <div className='navBar-left'>
                <div className='logo'>
                    <img src={Logo} alt='logo' />
                </div>
            
                <Link to="/"><h2>CSUP BLOG</h2></Link>
            </div>

            <div className='navBar-right'>
                <button id='home-btn'><Link to='/'>Home</Link></button>
                <Link to='/create' ><button id='add-blog-btn'>Add Blog</button></Link>
            </div>

            <div className='navBar-right-mobi'>
                <DropDown/>
            </div>
        </div>
    )
}

export default NavBar;
