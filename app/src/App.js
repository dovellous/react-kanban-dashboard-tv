import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import JobItemSwiper from './JobItemSwiper.js';
import './App.css';
const axios = require('axios');
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {

        this.refreshReplicationStats();

    }

    renderSwiper(){

        let self = this;

        window.swiper = new Swiper(".swiper", {
            loop: false,
            loopFillGroupWithBlank: true,
            //slidesPerView: 4,
            //slidesPerGroup: 4,
            spaceBetween: 1,
            centeredSlides: false,
            direction: 'horizontal',
            autoplay: {
                delay: 10000,
                disableOnInteraction: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        window.swiper.on('reachEnd', function () {

            setTimeout(function(){

                window.swiper.destroy(true, true);

                self.refreshReplicationStats();

            }, 10000);

        });

        window.swiper.on('afterInit', function () {

            console.log(":: SWIPER INITIALISED ::");

        });

    }

    refreshReplicationStats(){

        let self = this;

        this.setState({ items: [] })

        // Make a request for a user with a given ID
        axios.get('http://34.122.0.185/fm/')
            .then(function (response) {
                // handle success
                self.populateData(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }

    normaliseData( data ){

        console.warn(":: REAL DATA ::", data.data.data);

        return data.data;

    }

    populateData( data ){

        let self = this;

        data = this.normaliseData( data );

        console.log(":: POPULATE DATA ::", data);

        setTimeout(function(){

            self.setState({ items: self.normaliseData( data ) })

            console.log(":: POPULATE DATA :: this.state.items ::", self.state.items);

            self.renderSwiper();

        },1000);

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
