import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';

class Card extends React.Component {

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
                            <span className="avatar">
                                <img className="avatar-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAABrUlEQVRYhe2Vv66CMBSHfR99DXyMvoQ+A2yuOrhCwmxcYZQNWG5C4lAX0sSBgaGDw+9Opym14C0m95rcNjlLaU8/ztc/i9Vyh0+MxV8DeDAP5sE8mAf7NDDGUmTZFZx3KrLsiu3mbB1PY4rLbTKvntMJbB0cUVxuoCZED847CNGrvqa5Yx0cB/P0Zn7TQ8qHGucE1jR3tThj6RN0XbUA8FQZvSVxac192BcAgK6TbmBJXCqoKR22xADAeQcpH6Pz66pVBpzASJdZKdv+M/sIjCo6pvF0+nIHoz316mCMzeW8U7oO+8KqkbHUDSwK8x9pfAVGlamr1qpxtdzNA7Md9yQuB9cGhX516GB11ULKh1WjM9h2cx4knwKjzR+FuRXM1KlrdAajvzL/1BZZdp0EM3XqGmeB0Ykau4dcwHSdusZZYIylqmpjT886OKrEU2Ckj14R/YpxBqO9Rs9GXbVI4hJRmOOwL1BcbuqbEP1gMdv+1Mfq/bPAqHKkwmxC9FbVNjB63nSNb4GZFYzCHFGYTz7OUZg/6Wcstc6jnG+B/XZ4MA/mwT4tPJgH+7dg31C1FJmlrXUEAAAAAElFTkSuQmCC"
                                    alt="Gracious Mashasha"/>
                            </span>
                            <span className="fullname">
                                Gracious Mashasha
                            </span>
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

export default Card;
