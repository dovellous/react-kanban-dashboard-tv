import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';
import SnapchatThread from "./SnapchatThread.js";

class CardLoader extends React.Component {

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
            <div className="card job-item j-i-1">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        
                        <div className="identity">
                            <SnapchatThread />
                        </div>

                    </li>
                    <li className="list-group-item">
                        <span className="job-number">Job #00012</span>
                        <br/>
                        <span> Electrical Installation </span>
                    </li>
                    <li className="list-group-item">
                        <div className="box">
                            <div>
                                <i className="fa fa-eye fa-icon"></i>
                                View
                            </div>
                            <div>
                                <i className="fa fa-calendar fa-icon"></i>
                                4 Months Ago
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );

    }

}

export default CardLoader;
