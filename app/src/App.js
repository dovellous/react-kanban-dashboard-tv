import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import JobItemSwiper from './JobItemSwiper.js';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    col1: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        },
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        },
                    ],
                    col2: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        }
                    ],
                    col3: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        }
                    ],
                    col4: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        }
                    ],

                },
                {
                    col1: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        },
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        },
                    ],
                    col2: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        }
                    ],
                    col3: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        }
                    ],
                    col4: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        }
                    ],

                },
                {
                    col1: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        },
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        },
                    ],
                    col2: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        }
                    ],
                    col3: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        }
                    ],
                    col4: [
                        {
                            state: "{jobItem.state}",
                            image: "{jobItem.image}",
                            name: "{jobItem.name}",
                            job: "{jobItem.job}",
                            description: "{jobItem.description}",
                            url: "{jobItem.url}",
                            time: "{jobItem.time}",
                        }
                    ],

                },

            ],
        };
    }

    componentDidMount() {

        this.renderSwiper();

        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }

    renderSwiper(){

        var swiper = new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        console.log(swiper);

    }

    render() {

        return (
            <div className="container-fluid ">
                <div className="row kanban-header-container">
                    <div className="col-12 col-md-12 kanban-header">
                        <img alt="" src="https://communicator.hyperefficient2.net/assets/display/title.png"
                             className="kanban-header-image"/>
                    </div>
                </div>

                <div className="row kanban-tiles-container">

                    <JobItemSwiper items={this.state.items} />

                </div>
                <div className="row  kanban-footer-container">
                    <div className="col-4">&nbsp;</div>
                    <div className="col-4  kanban-footer-text-container">
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="col-4">&nbsp;</div>
                </div>
            </div>
        );

    }

}

export default App;
