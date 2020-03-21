import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BG from '../assets/images/BG.png'
import CoachingBG from '../assets/images/bg@3x.png'
import '../assets/scss/main.scss'
import CoachingFooter from './CoachingFooter'


class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props
    return (
      <div className={`body ${this.state.loading} ${this.props.hideHomeImg ? 'light-body-bg' : ''}`}>
        {/*<img className='absoluted-header-image' src={BG}/>*/}
        {this.props.show ? <img
            src={CoachingBG}
            hidden={this.props.hideHomeImg}
            className='home-bg-img coaching-bg-img'/>
          : <img src={BG} className='home-bg-img'/>
        }
        <div
          id='wrapper'
          className={this.props.show && !this.props.hideHomeImg ? 'coach-wrapper' : ''}
          style={{ paddingBottom: this.props.hideHomeImg ? 15 : 0 }}
        >
          <Header show={this.props.show} isLogoWhite={this.props.isLogoWhite}/>
          {children}
        </div>
        {this.props.coachingFooter ?
          <CoachingFooter increaseFooterMargin={this.props.increaseFooterMargin}/>
          :
          <Footer show={this.props.show}/>
        }

        {/*<img src={footerImg}/>*/}
      </div>
    )
  }
}

export default Layout
