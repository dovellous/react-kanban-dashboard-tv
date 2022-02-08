import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment';
moment().format();

class Zone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            object: this.props.object,
            zone_name: this.props.zone_name,
            zone_id: this.props.zone_id,
            tenant_id: this.props.tenant_id,
            in_progress_label: this.props.in_progress_label,
            in_progress_value: this.props.in_progress_value,
            sla_breaches_label: this.props.sla_breaches_label,
            sla_breaches_value: this.props.sla_breaches_value,
            branches_label: this.props.branches_label
        };
    }

    componentDidMount() {

    }

    render() {

        return (

            <div className={'card zone-item '+this.props.state}>

                <div className="row">

                    <div className="col-md-12">

                        <h2 className="workshop-title"> {this.state.zone_name} </h2>
                        <h4 className="workshop-label"> {this.state.branches_label} </h4>

                        <hr className="workshop-hr" />

                        <div className="row">

                            <div className="col-md-6 col-sm-6 right-border-solid">

                                <h2 className="in-progress-title"> {this.state.in_progress_value} </h2>
                                <h4 className="in-progress-label"> {this.state.in_progress_label} </h4>

                            </div>

                            <div className="col-md-6 col-sm-6">

                                <h2 className="in-progress-title"> {this.state.sla_breaches_value} </h2>
                                <h4 className="in-progress-label"> {this.state.sla_breaches_label} </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );

    }

}

export default Zone;
