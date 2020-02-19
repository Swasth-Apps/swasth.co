import React,{useState} from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import swasthLogo from '../assets/images/swasth-logo-dark.png';
import { Link } from 'gatsby';

const Header = (props) => {
  const [state, setState] = useState(false)
  console.log('prrrr',props.show)
  return (
    <>
    <header id="header" className="alt">
      <nav className='header-nav'>
        <Link to="/">
          <img src={swasthLogo} alt='Home'/>
        </Link>
        {props.show && !state ?
          <>
            <a href="https://provider.swasth.co">
              <div className="menu-content hide-content" href="javascript:;">Features</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content hide-content" href="javascript:;">Pricing</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content hide-content" href="javascript:;">Case Studies</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content hide-content" href="javascript:;">About</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content hide-content" href="javascript:;">Blog</div>
            </a>
          </> : ''}
        <a href="https://provider.swasth.co">
          <div className="menu-content" href="javascript:;">Clinicians</div>
        </a>
        <a className='menu-fold-icon'
           hidden={!props.show}
           href='javascript:void(0)'
           onClick={() => setState(!state)}>
          {state?<Icon className='icon' type="close" />
             :<Icon className='icon' type="menu" /> }
        </a>
      </nav>
    </header>
      {
        props.show && state ?
          <div className='menu-fold-content'>
            <a href="https://provider.swasth.co">
              <div className="menu-content" href="javascript:;">Features</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content" href="javascript:;">Pricing</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content" href="javascript:;">Case Studies</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content" href="javascript:;">About</div>
            </a>
            <a href="https://provider.swasth.co">
              <div className="menu-content" href="javascript:;">Blog</div>
            </a>
        </div>:''
      }
      </>
  )
}
Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
