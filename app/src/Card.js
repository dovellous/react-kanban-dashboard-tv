import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            state:null,
            fullname:'null',
            job:'null',
            description:'null',
            url:'null',
            time:'null',
            escalate:false,
        };
    }

    componentDidMount() {

    }

    render() {

        return (

            <div className={'card job-item '+this.props.state}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">

                        <div className="identity">
                            <span className="avatar">
                                <img
                                    className="avatar-image"
                                    src={'https://ui-avatars.com/api/?format=svg&background=000099&color=ffffff&bold=true&rounded=true&font-size=0.4&size=30&name='+this.props.fullname}
                                    alt={this.props.fullname}
                                />
                            </span>
                            <span className="fullname">
                                {this.props.fullname}
                            </span>
                        </div>

                        {(this.props.escalate === true || this.props.escalate === 'true' || this.props.escalate === 1 || this.props.escalate === '1')  &&

                        <div id="b464" className="xblinker">



                            <svg width="18" height="18">
                                <rect
                                    width="18" height="18"
                                    style={
                                        {
                                            'fill': 'rgb(255,0,0)',
                                            'strokeWidth': '1',
                                            'stroke': 'rgb(255,255,255)',
                                            'border': '2px solid #ffffff'
                                        }
                                    }>
                                    <animate
                                        attributeType="XML"
                                        attributeName="fill"
                                        values="#fff;#f00;#fff;#fff"
                                        dur="1.3s"
                                        repeatCount="indefinite"/>
                                </rect>
                            </svg>
                        </div>

                        }

                    </li>
                    <li className="list-group-item">

                        <div className="jobSummary">
                            <span className="job-number">Job: #{this.props.job}</span>
                            <br/>
                            <span className="truncate">{this.props.description}</span>
                        </div>

                    </li>
                    <li className="list-group-item">

                        <div className="jobFooter">
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

export default Card;
