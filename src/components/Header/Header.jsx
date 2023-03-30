import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className='nav-bar'>
                <div class="nav-left">
                    <a href="#">Knowledge Corner</a>
                </div>
                <div class="nav-right">
                    <img src="https://img.freepik.com/free-photo/urban-young-hipster-indian-man-wear-all-black-cool-south-asian-guy-full-cap_627829-4482.jpg?w=1060&t=st=1680195881~exp=1680196481~hmac=e5de80063eb386a9dca50a118202ad1cf4410382484923d315cf3c536a861b8d" alt="Profile Image" />
                </div>
            </div>
            <hr />
        </nav>

    );
};

export default Header;