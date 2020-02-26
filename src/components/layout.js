import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BG from '../assets/images/BG.png'
import '../assets/scss/main.scss';


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
                <div id='wrapper' className={this.props.show ? 'coach-wrapper' :''}>
                    <Header show={this.props.show} />
                    {children}
                </div>
                <Footer />

                {/*<img src={footerImg}/>*/}
            </div>
        )
    }
}

export default Layout
