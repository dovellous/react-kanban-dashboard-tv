import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import Card from './Card.js';
import CardColumnHeaders from './CardColumnHeaders.js';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
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

                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <CardColumnHeaders />
                                <div className="row kanban-tiles-container-row">
                                    <div className="col-3 col-md-3 color-1x">
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                    </div>
                                    <div className="col-3 col-md-3 color-2x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className="col-3 col-md-3 color-3x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className="col-3 col-md-3 color-4x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <CardColumnHeaders />
                                <div className="row kanban-tiles-container-row">
                                    <div className="col-3 col-md-3 color-1x">
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                    </div>
                                    <div className="col-3 col-md-3 color-2x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className="col-3 col-md-3 color-3x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className="col-3 col-md-3 color-4x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <CardColumnHeaders />
                                <div className="row kanban-tiles-container-row">
                                    <div className="col-3 col-md-3 color-1x">
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                    </div>
                                    <div className="col-3 col-md-3 color-2x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className="col-3 col-md-3 color-3x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className="col-3 col-md-3 color-4x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <CardColumnHeaders />
                                <div className="row kanban-tiles-container-row">
                                    <div className="col-3 col-md-3 color-1x">
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                        <Card
                                            state="not_started"
                                            image=""
                                            name="Gracious Mashasha"
                                            job="Gracious"
                                            description="Gracious"
                                            url="Gracious"
                                            time="Gracious"
                                        />
                                    </div>
                                    <div className="col-3 col-md-3 color-2x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className="col-3 col-md-3 color-3x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                    <div className="col-3 col-md-3 color-4x">

                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
