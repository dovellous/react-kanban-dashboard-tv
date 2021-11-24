import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
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
                <div className="row kanban-button-container">
                    <div className="col-3 col-md-3  color-1x">
                        <img src="https://communicator.hyperefficient2.net/assets/display/m1.png"
                             className="beveled-milestone-title-image" alt=""/>
                    </div>
                    <div className="col-3 col-md-3  color-2x">
                        <img src="https://communicator.hyperefficient2.net/assets/display/m2.png"
                             className="beveled-milestone-title-image" alt=""/>
                    </div>
                    <div className="col-3 col-md-3  color-3x">
                        <img src="https://communicator.hyperefficient2.net/assets/display/m3.png"
                             className="beveled-milestone-title-image" alt=""/>
                    </div>
                    <div className="col-3 col-md-3  color-4x">
                        <img src="https://communicator.hyperefficient2.net/assets/display/m4.png"
                             className="beveled-milestone-title-image" alt=""/>
                    </div>
                </div>
                <div className="row kanban-tiles-container">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="row kanban-tiles-container-row">
                                    <div className="col-3 col-md-3 color-1x">COL1</div>
                                    <div className="col-3 col-md-3 color-2x">COL2</div>
                                    <div className="col-3 col-md-3 color-3x">COL3</div>
                                    <div className="col-3 col-md-3 color-4x">COL4</div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row kanban-tiles-container-row">
                                    <div className="col-3 col-md-3 color-1x">COL5</div>
                                    <div className="col-3 col-md-3 color-2x">COL6</div>
                                    <div className="col-3 col-md-3 color-3x">COL7</div>
                                    <div className="col-3 col-md-3 color-4x">COL8</div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row kanban-tiles-container-row">
                                    <div className="col-3 col-md-3 color-1x">COL9</div>
                                    <div className="col-3 col-md-3 color-2x">COL10</div>
                                    <div className="col-3 col-md-3 color-3x">COL11</div>
                                    <div className="col-3 col-md-3 color-4x">COL12</div>
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
