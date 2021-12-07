import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import JobItemSwiper from './JobItemSwiper.js';

const axios = require('axios');

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                tenant:{

                }
            },
            items: [],
            titles: {
                t1: "Not Started",
                t2: "In Progress",
                t3: "Completed",
                t4: "Delivered",
            }
        };
    }

    componentDidMount() {

        let self = this;

        this.refreshReplicationStats();

        setTimeout(function () {

            console.log("::: TENANT STATE :::", self.state)

            self.setState({
                titles: {
                    t1: self.state.userData.tenant.not_started_title,
                    t2: self.state.userData.tenant.in_progress_title,
                    t3: self.state.userData.tenant.completed_title,
                    t4: self.state.userData.tenant.delivered_title,
                }
            })

        },1000);

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
        axios.get('https://communicator.hyperefficient2.net/index.php/display/retrieve_json/'+self.props.userData.tenant_id)
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

        //console.warn(":: REAL DATA :: XXX ::", data.data.pages);

        return data.data.pages;

    }

    populateData( data ){

        let self = this;

        data = this.normaliseData( data );

        setTimeout(function(){

            console.log(":: POPULATE DATA :: this.state.items :: 1 ::", data);

            self.setState({ items: data })

            console.log(":: POPULATE DATA :: this.state.items :: 2 ::", self.state.items);

            self.renderSwiper();

        },1000);

    }

    render() {

        return (

            <div className="container-fluid ">

                <div className="row kanban-header-container">

                    <div className="col-10 col-md-10 kanban-header">

                        <img alt="" src="https://communicator.hyperefficient2.net/assets/display/title.png" className="kanban-header-image" />

                    </div>

                    <div className="col-2 col-md-2 kanban-header">

                        <i className="fa fa-power-off fa-icon" style={{fontSize : "36px", "color": "#ffff", "float": "right"}}  onClick={this.props.actionLogout} ></i>

                    </div>

                </div>

                <div className="row kanban-tiles-container">

                    <JobItemSwiper titles={this.state.titles} items={this.state.items} />

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

export default Dashboard;
