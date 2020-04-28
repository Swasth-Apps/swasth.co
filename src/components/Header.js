import React, { useState } from 'react'
import { Button, Icon,Dropdown,Menu  } from 'antd'
import PropTypes from 'prop-types'
import coachingLogo from '../assets/images/swasth-coach-logo.png'
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
            {!props.show ?
              <>
                <a href="/coaching/about" className='margin-right-25'>
                  <div className="menu-content hide-content" href="javascript:;">About</div>
                </a>

                <a href="/coaching" className='margin-right-25'>
                  <div className="menu-content hide-content" href="javascript:;">Coaching</div>
                </a>
              </> : null}
            <a
              href="https://provider.swasth.co"
              hidden={props.show}
            >
              <div className="menu-content">Clinicians</div>
            </a>
            <Dropdown overlay={menu}>
              <a className='margin-right-25'>
                <div className="menu-content hide-content" href="javascript:;">Blog</div>
              </a>
            </Dropdown>

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
