import React from "react";
import FeaturedPrograms from "./FeaturedPrograms";


class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: []
        }
    }

    render = () => {
        const {organization} = this.props;
        return (
            <>
                <div className="organization-featured-programs">
                    <div
                        id='wrapper'
                        className={'coach-wrapper'}
                        style={{paddingBottom: 0}}
                    >
                        <h1 className="base-text">Programs</h1>
                        {organization?.programs?.map((program, index) =>
                            <FeaturedPrograms
                                program={program}
                                index={index}
                                noPrice
                            />
                        )}
                    </div>
                </div>
                </>
        )
    };
}
export default Programs;
