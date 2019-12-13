import React from 'react'

import '../assets/scss/main.scss'
import Header from './Header'
import Footer from './Footer'
import BG from '../assets/images/BG.png'
// import footerImg from '../assets/images/footer_bg.png'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        const { children } = this.props
        return (
            <div className={`body ${this.state.loading}`}>
                {/*<img className='absoluted-header-image' src={BG}/>*/}
                <img src={BG} className='home-bg-img'/>
                <div id="wrapper">
                    <Header />
                    {children}
                </div>
                <Footer />

                {/*<img src={footerImg}/>*/}
            </div>
        )
    }
}

export default Layout
