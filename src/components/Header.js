import React, { useState } from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import swasthLogo from '../assets/images/swasth-logo-dark.png'
import { Link } from 'gatsby'

const Header = (props) => {
  const [state, setState] = useState(false)
  return (
    <>
      <header id="header" className="alt">
        <nav className='header-nav'>
          <Link to="/" hidden={props.show && state} style={{display: 'flex', alignItems: 'center'}}>
            <img style={{marginBottom:-5}} src={swasthLogo} alt='Home'/>
          </Link>
          {props.show && !state ?
            <>
              <Link to="/live-coach/features">
                <div className="menu-content hide-content" href="javascript:;">Features</div>
              </Link>
              <a href="https://clinician.swasth.co/pricing">
                <div className="menu-content hide-content" href="javascript:;">Pricing</div>
              </a>
              <Link to="/live-coach/case-studies">
                <div className="menu-content hide-content" href="javascript:;">Case Studies</div>
              </Link>
              <a href="https://provider.swasth.co">
                <div className="menu-content hide-content" href="javascript:;">About</div>
              </a>
              <a href="https://provider.swasth.co">
                <div className="menu-content hide-content" href="javascript:;">Blog</div>
              </a>
              <a href="https://provider.swasth.co">
                <div className="menu-content hide-content">Clinicians</div>
              </a>
            </> : ''}
          <a
            href="https://provider.swasth.co"
            hidden={props.show}
          >
            <div className="menu-content">Clinicians</div>
          </a>
          {props.show ?
            <a
              className='menu-fold-icon'
              href='javascript:void(0)'
              onClick={() => setState(!state)}>
              {state ? <Icon className='icon' type="close"/>
                : <Icon className='icon' type="menu"/>}
            </a> : ''
          }
        </nav>
      </header>
      {
        props.show && state ?
          <div className='menu-fold-content'>
            <Link to="/live-coach/features">
              <div className="menu-content">Features</div>
            </Link>
            <a href="https://clinician.swasth.co/pricing">
              <div className="menu-content">Pricing</div>
            </a>
            <Link to="/live-coach/case-studies">
              <div className="menu-content">Case Studies</div>
            </Link>
            <a href="https://provider.swasth.co">
              <div className="menu-content">About</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content">Blog</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content">Clinicians</div>
            </a>
          </div> : ''
      }
    </>
  )
}
Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
