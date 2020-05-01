import React, { useState } from 'react'
import { Icon, Menu } from 'antd'
import PropTypes from 'prop-types'
import swasthDarkLogo from '../assets/images/swasth-logo-dark.png'
import { Link } from 'gatsby'

const Header = (props) => {
  const [state, setState] = useState(false)
  const { isContentWhite } = props;
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/inside-design">
          All Categories
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="http://www.taobao.com/">
          Anxiety
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  href="http://www.tmall.com/">
          Depression
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <header id="header" className="alt">
        <nav className='header-nav'>
        {/*  {props.show ?
            <Link to="/coaching" hidden={props.show && state}
                  style={{ display: 'flex', alignItems: 'center', width: 200 }}>
              <img style={{ marginBottom: -5, width: '100%' }} src={coachingLogo} alt='Home'/>
            </Link> :*/}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', width: 150 }}>
              <img style={{ marginBottom: -5 }} src={swasthDarkLogo} alt='Home'/>
            </Link>
          {/*}*/}
          <div style={{ display: 'flex',alignItems:'center' }}>
                <a href="/" className='margin-right-25'>
                  <div className="menu-content hide-content" href="javascript:;">About</div>
                </a>

                <a href="/" className='margin-right-25'>
                  <div className="menu-content hide-content" href="javascript:;">Coaching</div>
                </a>
            <a
              href="https://clinician.swasth.co"
            >
              <div className="menu-content">Clinicians</div>
            </a>
              <a href={'/blog'} className='margin-right-25'>
                <div className="menu-content hide-content" href="javascript:;">Blog</div>
              </a>

            {props.show ?
              <a
                className='menu-fold-icon'
                href='javascript:void(0)'
                onClick={() => setState(!state)}>
                {state ? <Icon className='icon' type="close"/>
                  : <Icon className={`icon ${isContentWhite ? 'not-white' :''}`} type="menu"/>}
              </a> : ''
            }
          </div>
        </nav>
      </header>
      {
        props.show && state ?
          <div className='menu-fold-content'>
            {/*<Link to="/coaching/features">*/}
            {/*<div className="menu-content">Features</div>*/}
            {/*</Link>*/}
            <a href="/">
              <div className="menu-content" href="javascript:;">Home</div>
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
