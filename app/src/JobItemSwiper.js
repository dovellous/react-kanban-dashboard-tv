import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card.js';
import CardColumnHeaders from './CardColumnHeaders.js';

class JobItemSwiper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };

    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000);

    }

    render() {

        return (

            <div className="swiper">
                <div className="swiper-wrapper">

                    {this.props.items.map(slide => (

                        <div className="swiper-slide">
                            <CardColumnHeaders />
                            <div className="row kanban-tiles-container-row">

                                <div className="col-3 col-md-3">

                                    {slide.col1.map(jobItem => (

                                        <Card
                                            state={jobItem.state}
                                            image={jobItem.image}
                                            name={jobItem.name}
                                            job={jobItem.job}
                                            description={jobItem.description}
                                            url={jobItem.url}
                                            time={jobItem.time}
                                        />

                                    ))}

                                </div>

                                <div className="col-3 col-md-3">

                                    {slide.col2.map(jobItem => (

                                        <Card
                                            state={jobItem.state}
                                            image={jobItem.image}
                                            name={jobItem.name}
                                            job={jobItem.job}
                                            description={jobItem.description}
                                            url={jobItem.url}
                                            time={jobItem.time}
                                        />

                                    ))}

                                </div>

                                <div className="col-3 col-md-3">

                                    {slide.col3.map(jobItem => (

                                        <Card
                                            state={jobItem.state}
                                            image={jobItem.image}
                                            name={jobItem.name}
                                            job={jobItem.job}
                                            description={jobItem.description}
                                            url={jobItem.url}
                                            time={jobItem.time}
                                        />

                                    ))}

                                </div>

                                <div className="col-3 col-md-3">

                                    {slide.col4.map(jobItem => (

                                        <Card
                                            state={jobItem.state}
                                            image={jobItem.image}
                                            name={jobItem.name}
                                            job={jobItem.job}
                                            description={jobItem.description}
                                            url={jobItem.url}
                                            time={jobItem.time}
                                        />

                                    ))}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        );

    }

}

export default JobItemSwiper;
