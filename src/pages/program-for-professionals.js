import React from 'react'
import Layout from '../components/Layout/layout'
import Overview from '../components/Coaching/Program/ProfessionalsProgram/Overview'
import TrainingApproach from '../components/Coaching/Program/ProfessionalsProgram/Tools'
import FAQs from '../components/Coaching/Program/ProfessionalsProgram/Faq'
import {Tabs} from 'antd'

const { TabPane } = Tabs;

class Expert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '2',
            isCourseOpen: props.location.state?.isCourseOpen || false
        }
    }

    getContent = () => {
        switch (this.state.selectedTab) {
            case '2':
                return <Overview onClick={this.handleCourseClick}/>;
            case '3':
                return <TrainingApproach/>;
            case '6':
                return <FAQs />
        }
    };
    getImageContent = () => {
        switch (this.state.selectedTab) {
            case '2':
                return "Overview";
            case '3':
                return "Training Approach";
            case '6':
                return "FAQ"
        }
    };
    handleCourseClick = () => {
        this.setState({
            isCourseOpen: true,
            selectedTab: '2',
        })
    };

    render() {
        return (
            <Layout extraHeader>
                <section
                    id="banner"
                    className={`major "max-width-class"`}
                    style={{ backgroundImage: `url(https://res.cloudinary.com/psychwire/image/upload/q_auto,f_auto/v1515387928/pw.com/harris-header-background)` }}
                >
                        {/*<header className="major">*/}

                        {/*</header>*/}

                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                            <h2 className="base-text" style={{marginTop: "-2em",color: "white", textAlign:"center"}}>ACT for Adolescents</h2>

                        </div>
                </section>
                <Tabs activeKey={this.state.selectedTab} className="professional-program-tab" onChange={(e) => this.setState({
                    selectedTab: e,
                    isCourseOpen: false
                })}>
                    <TabPane tab={<p className="para-text">Overview</p>} key="2"/>
                    <TabPane tab={<p className="para-text">Tools</p>} key="3"/>
                    <TabPane tab={<p className="para-text">Resources</p>} key="4"/>
                    <TabPane tab={<p className="para-text">FAQ</p>} key="6"/>
                </Tabs>
                <div id="wrapper">
                    {this.getContent() }
                </div>
            </Layout>
        )
    }
}

export default Expert
