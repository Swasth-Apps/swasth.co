import React, {useEffect, useState} from 'react'
import {Collapse, Dropdown, Icon} from 'antd'
import PropTypes from 'prop-types'
import resilienceDarkLogo from '../../assets/images/Resiliens-Logo@3x.png'
import {Link} from 'gatsby'
import RequestDemoModal from "../RequestDemoModal";
import OverviewActive from "../../assets/images/coachingTabIcons/overview-normal-icon.png";
import ExpertActive from "../../assets/images/coachingTabIcons/experts-normal-icon.png";
import EveryoneActive from "../../assets/images/coachingTabIcons/Everyone-normal-icon.png";
import ProfessionalActive from "../../assets/images/coachingTabIcons/professional-normal-icon.png";
import Coaching from "../../assets/images/navbar-icon/coaching.png"
import Resilify from "../../assets/images/navbar-icon/resilify.png"
import Clinician from "../../assets/images/navbar-icon/clinician.png"
import AboutUsIcon from "../../assets/images/navbar-icon/about-us-icon.png"
import PressIcon from "../../assets/images/navbar-icon/press-icon.png"


const Header = (props) => {
    const [state, setState] = useState(false);
    const [tab, setTab] = useState(props.extraHeader === "coaching" ? "overview" : "");
    const {isContentWhite} = props;

    useEffect(() => {
        window.addEventListener("scroll", () => onScroll())
    }, []);

    useEffect(() => {
        onScroll();
        const header = document.getElementById("coaching-header");
        if (state) {
            header.classList.add("sticky-full-height-header");
        } else {
            header.classList.remove("sticky-full-height-header");
        }
    }, [state]);

    const onScroll = () => {
        const header = document.getElementById("coaching-header");
        if(header) {
            const sticky = header.offsetTop;
            if (state || (window.pageYOffset > (sticky + 100))) {
                header.classList.add("sticky-header");
            } else {
                header.classList.remove("sticky-header");
            }
        }
    };

    const onChangeTab = tab => {
        setTab(tab);
        setState(false);
        props.onChangeTab(tab);
    };

    const renderExtraHeader = () => {
        switch (props.extraHeader) {
            case "coaching":
                return <>
                    <a style={{margin: "30px 0"}} rel={"noreferrer"} className="coaching-mobile-header">
                        <a
                            rel="noreferrer"
                            className={tab === "overview" ? "selected-tab" : ""}
                            onClick={() => onChangeTab("overview")}
                        >
                            <div className="menu-content base-text">
                                <img src={OverviewActive}/>
                                Overview
                            </div>
                        </a>

                        <a
                            rel="noreferrer"
                            className={tab === "everyone" ? "selected-tab" : ""}
                            onClick={() => onChangeTab("everyone")}
                        >
                            <div className="menu-content base-text">
                                <img src={EveryoneActive}/>
                                For Everyone</div>
                        </a>

                        <a
                            rel="noreferrer"
                            className={tab === "professionals" ? "selected-tab" : ""}
                            onClick={() => onChangeTab("professionals")}
                        >
                            <div className="menu-content base-text">
                                <img src={ProfessionalActive} />
                                For Health Professionals</div>
                        </a>

                        <a
                            rel="noreferrer"
                            className={tab === "experts" ? "selected-tab" : ""}
                            onClick={() => onChangeTab("experts")}
                        >
                            <div className="menu-content base-text">
                                <img src={ExpertActive}/>
                                Experts</div>
                        </a>
                        <a
                            rel="noreferrer"
                            className={tab === "organizations" ? "selected-tab" : ""}
                            onClick={() => onChangeTab("organizations")}
                        >
                            <div className="menu-content base-text">
                                <img src={ExpertActive}/>
                                Organizations</div>
                        </a>
                    </a>
                </>;
            case "resilify":
                return <div/>;
            default:
                return <div/>
        }
    };

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
                    </Link>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {!state ?
                            <>
                                {/*<div className={`menu-content hide-content ${props.isLogoWhite ? 'white-text':''}`} href="javascript:;">Features</div>*/}
                                {/*</Link>*/}
                                <Dropdown
                                    overlay={<div className="header-menu-submenu">

                                        <Link to="/coaching/overview" className='menu-content-item'>
                                            <div className="menu-item">
                                                <img src={Coaching}/>
                                                <div className={`menu-content para-text`}>
                                                    <p>Coaching Platform</p>
                                                    <p className="para-book-text">Behavioral Health Coaching</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            to="/resilify"
                                            className='menu-content-item'>
                                            <div className="menu-item">
                                                <img src={Resilify}/>
                                                <div className={`menu-content para-text`}>
                                                    <p>Resilify</p>
                                                    <p className="para-book-text">Self Guided Programs </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <a target="_blank" href="https://clinician.resiliens.com"
                                           className='menu-content-item'>
                                            <div className="menu-item">
                                                <img src={Clinician}/>
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
                                                <img
                                                    src={AboutUsIcon}/>
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
                                                <img src={PressIcon}/>
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
                                <a rel="noreferrer" hidden={state}
                                   style={{display: 'flex', alignItems: 'center', padding: 0}}
                                   className='header-content'>
                                    <RequestDemoModal/>
                                </a>
                            </> : ''}
                        <a
                            className={`menu-fold-icon ${state ? "menu-close-icon" : ""}`}
                            rel="noreferrer"
                            onClick={() => {
                                setState(!state);
                            }}>
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
                {props.extraHeader ? renderExtraHeader() : null}
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
                            <Link to="/coaching/overview" className='menu-content-item'>
                                <div className="menu-item">
                                    <img src={Coaching}/>
                                    <div className={`menu-content para-text`}>
                                        <p>Coaching Platform</p>
                                        <p className="para-book-text">Behavioral Health Coaching</p>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                to="/resilify"

                                className='menu-content-item'>
                                <div className="menu-item">
                                    <img src={Resilify}/>
                                    <div className={`menu-content para-text`}>
                                        <p>Resilify</p>
                                        <p className="para-book-text">Self Guided Programs </p>
                                    </div>
                                </div>
                            </Link>
                            <a target="_blank" href="https://clinician.resiliens.com"
                               className='menu-content-item'>
                                <div className="menu-item">
                                    <img src={Clinician}/>
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
                                    <img src={AboutUsIcon}/>
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
                                    <img src={PressIcon}/>
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
                    <RequestDemoModal/>
                </Link>
                {/*<a href="/download">*/}
                {/*<div className="menu-content">Download App</div>*/}
                {/*</a>*/}
            </div>
            <div className="after-content"/>
        </>
    )
};
Header.propTypes = {
    onToggleMenu: PropTypes.func,
};

export default Header
