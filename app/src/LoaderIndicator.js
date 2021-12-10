import React from 'react';
import './LoaderIndicator.css';

class LoaderIndicator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {

        return (
            <div id="overlay" style={{opacity: 0}} >
                <div className="spinner"></div>
                <br />
                    Loading...
            </div>
        );

    }

}

export default LoaderIndicator;
