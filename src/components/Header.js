import React, {useState} from 'react'
import {Button, Icon} from 'antd'
import PropTypes from 'prop-types'
import resilienceDarkLogo from '../assets/images/Resiliens-Logo@3x.png'
import {Link} from 'gatsby'
import RequestDemoModal from "./RequestDemoModal";

const Header = (props) => {
    const [state, setState] = useState(false);
    const [modal,setModal] = useState(false)
    const {isContentWhite} = props;

    return (
        <>
            <header id="header" className={`alt ${props.aboutHeader ? "about-header" : ""}`}>

                <RequestDemoModal modal={modal} onClose={() => setModal(false)}/>
                <nav className='header-nav'>
                    <Link
                        to="/"
                        hidden={state}
                        className="header-logo-section"
                    >
                        <img style={{marginBottom: -5}} src={resilienceDarkLogo} alt='Home'/>
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
                                    <Button className="request-demo-btn" onClick={() => setModal(true)}>
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
