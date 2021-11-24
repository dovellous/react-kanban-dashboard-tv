import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';

class CardColumnHeaders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000);

    }

    render() {

        return (
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
        );

    }

}

export default CardColumnHeaders;
