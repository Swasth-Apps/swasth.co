import React from 'react'
import PropTypes from 'prop-types'
import swasthLogo from '../assets/images/swasth-logo-dark.png'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <nav className='header-nav'>
        <Link to="/">
            <img  src={swasthLogo} alt='Home'/>
            </Link>
        <a href="https://provider.swasth.co">
            <div className="menu-content" href="javascript:;">Clinicians</div>
        </a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
