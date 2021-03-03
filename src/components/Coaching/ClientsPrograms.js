import React from "react";
import CourseCard from "./CourseCard";
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import graphql_endpoint from '../../aws-appsync-url'
import {getMarketingPrograms} from "../../queries";


class ClientsPrograms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: []
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        Amplify.configure({
            API: {
                graphql_endpoint: graphql_endpoint.COACHING_MARKETING,
            },
        });
        API.graphql(graphqlOperation(getMarketingPrograms), {
            "x-api-key": graphql_endpoint.COACHING_API_KEY
        })
            .then(({data}) => {
                this.setState({
                    programs: data?.getMarketingPrograms,
                    loading: false
                })
            }).catch(() => this.setState({
            loading: false
        }));
    }


    render() {
        const {loading} = this.state;
        return (
            <div className="clients-navigation-wrapper">
                {loading ? <div className="keen-slider">
                    <div className="keen-slider__slide ">
                        <div className="card-loader">
                            <div className="card__image loading"/>
                            <div className="card__title loading"/>
                            <div className="card__description loading"/>
                        </div>
                    </div>
                    <div className="keen-slider__slide ">
                        <div className="card-loader">
                            <div className="card__image loading"/>
                            <div className="card__title loading"/>
                            <div className="card__description loading"/>
                        </div>
                    </div>
                    <div className="keen-slider__slide ">
                        <div className="card-loader">
                            <div className="card__image loading"/>
                            <div className="card__title loading"/>
                            <div className="card__description loading"/>
                        </div>
                    </div>
                </div> : null}
                <div className="keen-slider">
                    {this.state.programs?.map((program, index) =>
                        <CourseCard
                            className="keen-slider__slide number-slide1"
                            program={program}
                            index={index}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default ClientsPrograms;
