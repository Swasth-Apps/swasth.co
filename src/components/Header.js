import React, {useState} from 'react'
import {Button, Collapse, Dropdown, Icon} from 'antd'
import PropTypes from 'prop-types'
import resilienceDarkLogo from '../assets/images/Resiliens-Logo@3x.png'
import {Link} from 'gatsby'
import RequestDemoModal from "./RequestDemoModal";

const Header = (props) => {
    const [state, setState] = useState(false);
    const [modal, setModal] = useState(false)
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
                                <Dropdown
                                    overlay={<div className="header-menu-submenu">

                                        <Link to="/coaching" className='menu-content-item'>
                                            <div className="menu-item">
                                                <img src={require("../assets/images/navbar-icon/coaching.png")}/>
                                                <div className={`menu-content para-text`}>
                                                    <p>Coaching Platform</p>
                                                    <p className="para-book-text">Behavioral Health Coaching</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <a
                                            target="_blank"
                                            href="https://resilify.org"
                                            className='menu-content-item'>
                                            <div className="menu-item">
                                                <img src={require("../assets/images/navbar-icon/resilify.png")}/>
                                                <div className={`menu-content para-text`}>
                                                    <p>Resilify</p>
                                                    <p className="para-book-text">Self Guided Programs </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a target="_blank" href="https://clinician.resiliens.com"
                                           className='menu-content-item'>
                                            <div className="menu-item">
                                                <img src={require("../assets/images/navbar-icon/clinician.png")}/>
                                                <div className={`menu-content para-text`}>
                                                    <p>Clinician Platform</p>
                                                    <p className="para-book-text">Engage better with Clients</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>}
                                    placement="bottomCenter"
                                    arrow
                                >
                                    <a className='margin-right-25 header-content'>
                                        <div className={`menu-content base-text`}>
                                            Solutions
                                        </div>
                                    </a>
                                </Dropdown>
                                <Dropdown
                                    overlay={<div className="header-menu-submenu">
                                        <Link
                                            to="/about-us"
                                            className='menu-content-item'>
                                            <div className="menu-item">
                                                <img src={require("../assets/images/navbar-icon/about-us-icon.png")}/>
                                                <div className={`menu-content para-text`}>
                                                    <p>About Us</p>
                                                    <p className="para-book-text">Learn more about our mission</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            to="/"
                                            className='menu-content-item'>
                                            <div className="menu-item">
                                                <img src={require("../assets/images/navbar-icon/press-icon.png")}/>
                                                <div className={`menu-content para-text`}>
                                                    <p>Press</p>
                                                    <p className="para-book-text">Collected press materials</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>}
                                    placement="bottomCenter"
                                    arrow
                                >
                                    <a className='margin-right-25 header-content'>
                                        <div className={`menu-content base-text`}>
                                            Company
                                        </div>
                                    </a>
                                </Dropdown>
                                <Link to="/blog" className='margin-right-25 header-content'>
                                    <div className={`menu-content`}>
                                        Blog
                                    </div>
                                </Link>
                                <Link to="/" hidden={state} style={{display: 'flex', alignItems: 'center', padding: 0}}
                                      className='header-content'>
                                    <Button className="request-demo-btn" onClick={() => setModal(true)}>
                                        Request a Demo
                                    </Button>
                                </Link>
                            </> : ''}
                        <a
                            className={`menu-fold-icon ${state ? "menu-close-icon" : ""}`}
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
            <div className={`menu-fold-content ${state ? "menu-fold-content-open" : "menu-fold-content-close"}`}>
                {/*<Link to/features">*/}
                {/*<div className="menu-content">Features</div>*/}
                {/*</Link>*/}
                <a href="/">
                    <div className="menu-content base-text">Home</div>
                </a>
                <Collapse
                    accordion
                    className="folded-menu-collapse"
                    expandIconPosition="right"
                >
                    <Collapse.Panel header={<div className={`menu-content base-text`}>
                        Solutions
                    </div>} key="Solutions">
                        <div className="header-menu-submenu">
                            <Link to="/coaching" className='menu-content-item'>
                                <div className="menu-item">
                                    <img src={require("../assets/images/navbar-icon/coaching.png")}/>
                                    <div className={`menu-content para-text`}>
                                        <p>Coaching Platform</p>
                                        <p className="para-book-text">Behavioral Health Coaching</p>
                                    </div>
                                </div>
                            </Link>
                            <a
                                target="_blank"
                                href="https://resilify.org"
                                className='menu-content-item'>
                                <div className="menu-item">
                                    <img src={require("../assets/images/navbar-icon/resilify.png")}/>
                                    <div className={`menu-content para-text`}>
                                        <p>Resilify</p>
                                        <p className="para-book-text">Self Guided Programs </p>
                                    </div>
                                </div>
                            </a>
                            <a target="_blank" href="https://clinician.resiliens.com"
                               className='menu-content-item'>
                                <div className="menu-item">
                                    <img src={require("../assets/images/navbar-icon/clinician.png")}/>
                                    <div className={`menu-content para-text`}>
                                        <p>Clinician Platform</p>
                                        <p className="para-book-text">Engage better with Clients</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Collapse.Panel>
                    <Collapse.Panel header={<div className={`menu-content base-text`}>
                        Company
                    </div>} key="Company">
                        <div className="header-menu-submenu">
                            <Link
                                to="/about-us"
                                className='menu-content-item'>
                                <div className="menu-item">
                                    <img src={require("../assets/images/navbar-icon/about-us-icon.png")}/>
                                    <div className={`menu-content para-text`}>
                                        <p>About Us</p>
                                        <p className="para-book-text">Learn more about our mission</p>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                to="/"
                                className='menu-content-item'>
                                <div className="menu-item">
                                    <img src={require("../assets/images/navbar-icon/press-icon.png")}/>
                                    <div className={`menu-content para-text`}>
                                        <p>Press</p>
                                        <p className="para-book-text">Collected press materials</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Collapse.Panel>
                </Collapse>
                {/* <a href="https://clinician.resiliens.com">
                            <div className="menu-content">Clinicians</div>
                        </a>
                        <a href="https://healthcoach.resiliens.com">
                            <div className="menu-content">Coaching</div>
                        </a>*/}
                <a href="/blog">
                    <div className="menu-content base-text">Blog</div>
                </a>
                <Link to="/" style={{borderBottom: "none"}}>
                    <Button className="request-demo-btn" onClick={() => setModal(true)}>
                        Request a Demo
                    </Button>
                </Link>
                {/*<a href="/download">*/}
                {/*<div className="menu-content">Download App</div>*/}
                {/*</a>*/}
            </div>
        </>
    )
}
Header.propTypes = {
    onToggleMenu: PropTypes.func,
}

export default Header
