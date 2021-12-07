import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';

class CardColumnHeaders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: {
                t1: "Not Started.",
                t2: "In Progress.",
                t3: "Completed.",
                t4: "Delivered.",
            }
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    tick() {

        //console.warn(":::: >>>>>> TICK 2 <<<<<< ::::", this.props.titles, this.state);

        if (typeof this.props.titles !== "undefined") {

            this.setState({
                titles: this.props.titles
            });

        }

    }


    render() {

        return (
            <div className="row kanban-button-container">
                <div className="col-3 col-md-3  color-1x kanban-button-bg bg-1">
                    <h3 className="column-header-titles">{this.state.titles.t1}</h3>
                </div>
                <div className="col-3 col-md-3  color-2x kanban-button-bg bg-2">
                    <h3 className="column-header-titles">{this.state.titles.t2}</h3>
                </div>
                <div className="col-3 col-md-3  color-3x kanban-button-bg bg-3">
                    <h3 className="column-header-titles">{this.state.titles.t3}</h3>
                </div>
                <div className="col-3 col-md-3  color-4x kanban-button-bg bg-4">
                    <h3 className="column-header-titles">{this.state.titles.t4}</h3>
                </div>
            </div>
        );

    }

}

export default CardColumnHeaders;
