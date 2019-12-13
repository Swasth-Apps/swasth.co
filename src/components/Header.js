import React from 'react'
import PropTypes from 'prop-types'
import swasthLogo from '../assets/images/swasth-logo-dark.png'
import bannerGraphic from '../assets/images/Banner_graphic.png'
import { Col, Row } from 'antd'

const Header = (props) => (
    <header id="header" className="alt">
        <nav className='header-nav'>
            <img className='logo-resize' src={swasthLogo} alt='Swasth'/>
            <div className="menu-content" href="javascript:;">Clinician</div>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
