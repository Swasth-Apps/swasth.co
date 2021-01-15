import React, {useState} from 'react'
import {Button, Icon} from 'antd'
import PropTypes from 'prop-types'
import resilienceDarkLogo from '../assets/images/resilience-logo@2x.png'
import getStartedBtn from '../assets/images/get-started-btn.png'
import {Link} from 'gatsby'

const Header = (props) => {
    const [state, setState] = useState(false)
    const {isContentWhite} = props;

    return (
        <>
            <header id="header" className={`alt ${props.aboutHeader ? "about-header" : ""}`}>

                <nav className='header-nav'>
                    <Link
                        to="/"
                        hidden={state}
                        className="header-logo-section"
                    >
                        <img style={{marginBottom: -5}} src={resilienceDarkLogo} alt='Home'/>
                        <p className="para-text">Resiliens</p>
                    </Link>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {!state ?
                            <>
                                {/*<div className={`menu-content hide-content ${props.isLogoWhite ? 'white-text':''}`} href="javascript:;">Features</div>*/}
                                {/*</Link>*/}
                                <a target="_blank" href="https://clinician.swasth.co"
                                   activeClassName='header-nav-active'
                                   className='margin-right-25 header-content'>
                                    <div className={`menu-content`}>
                                        Clinicians
                                    </div>
                                </a>
                                <a activeClassName='header-nav-active' href="https://healthcoach.swasth.co"
                                   className='margin-right-25 header-content'>
                                    <div className={`menu-content`}>
                                        Coaching
                                    </div>
                                </a>
                                <a href="/blog" activeClassName='header-nav-active'
                                   className='margin-right-25 header-content'>
                                    <div className={`menu-content`}
                                         href="javascript:;">
                                        Blog
                                    </div>
                                </a>
                                <Link to="/" hidden={state}
                                      style={{display: 'flex', alignItems: 'center',padding: 0}}
                                      className='header-content'>
                                    <Button className="request-demo-btn">
                                        Request a Demo
                                    </Button>
                                </Link>
                            </> : ''}
                        <a
                            className='menu-fold-icon'
                            href='javascript:void(0)'
                            onClick={() => setState(!state)}>
                            {state ? <Icon className='icon' type="close"/>
                                : <Icon className={`icon ${isContentWhite ? 'not-white' : ''}`} type="menu"/>}
                        </a>
                    </div>
                    {/*!state ?
              <a to="/download">
                <Button className='download-btn menu-content hide-content'>Download App</Button>
            </a> : null*/}
                </nav>
            </header>
            {
                state ?
                    <div className='menu-fold-content'>
                        {/*<Link to/features">*/}
                        {/*<div className="menu-content">Features</div>*/}
                        {/*</Link>*/}
                        <a href="/">
                            <div className="menu-content" href="javascript:;">Home</div>
                        </a>
                        <a href="https://clinician.swasth.co">
                            <div className="menu-content">Clinicians</div>
                        </a>
                        <a href="https://healthcoach.swasth.co">
                            <div className="menu-content">Coaching</div>
                        </a>
                        <a href="/blog">
                            <div className="menu-content">Blog</div>
                        </a>
                        {/*<a href="/download">*/}
                        {/*<div className="menu-content">Download App</div>*/}
                        {/*</a>*/}
                    </div> : ''
            }
        </>
    )
}
Header.propTypes = {
    onToggleMenu: PropTypes.func,
}

export default Header
