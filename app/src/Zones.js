import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ZoneItemSwiper from './ZoneItemSwiper.js';
import {reactLocalStorage} from 'reactjs-localstorage';

class Zones extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                tenant:{

                }
            },
            workshops: []
        };

        this.handleViewWorkshopKanban = this.handleViewWorkshopKanban.bind(this);

        this.handlerRefreshZoneWorkshopsList = this.handlerRefreshZoneWorkshopsList.bind(this);

    }

    handleViewWorkshopKanban(id) {

        console.log("::: ZONE ITEM SWIPER :: VIEW WORKSHOP KANBAN ---> ID ::", id);

        this.props.viewWorkshops(id);

    }

    handlerRefreshZoneWorkshopsList() {

        console.log("::: REFRESH WORKSHOPS LIST ---> ZONE ID :::", this.state.userData.zone_id);

    }

    componentDidMount() {

        const self = this;

        this.setState({
            userData: this.props.userData,
            workshops: this.props.workshops,
        });

        reactLocalStorage.setObject("workshopsObject", this.props.workshops);

        console.log(":: POPULATE WORKSHOPS :: STATE ::", self.state);

        self.renderSwiper();

    }

    renderSwiper(){

        let self = this;

        /*

        window.swiper = new Swiper(".swiper", {
            loop: false,
            loopFillGroupWithBlank: true,
            //slidesPerView: 4,
            //slidesPerGroup: 4,
            spaceBetween: 1,
            centeredSlides: false,
            direction: 'horizontal',
            speed: 5000,
            autoplay: {
                delay: 15000,
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

        */

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

                    <ZoneItemSwiper refreshZoneWorkshopsList={this.handlerRefreshZoneWorkshopsList} viewWorkshops={this.props.viewWorkshops} workshops={this.state.workshops} />

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

export default Zones;
