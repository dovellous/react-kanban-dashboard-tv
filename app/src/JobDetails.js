import React from 'react';
import './JobDetails.css';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment';
moment().format();

class JobDetails extends React.Component {

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

    supervisorPIN(){

    }

    render() {

        return (

             <div className="wrapper wrapper-content" >

                <div className="ibox">
                    <div className="ibox-content app-container" style={{backgroundColor: "transparent", borderTop: "none"}}>

                        <div className="row">

                            <div className="col-md-6" style={{paddingRight: "30px"}}>

                                <div className="row mb-4">
                                    <div className="col-md-12" >
                                        <div className="ibox">
                                            <div className="ibox-title" style={{borderRadius: "6px", paddingLeft: "0px", paddingRight: "0px"}} id="progress-div">
                                                <div className="row">
                                                    <div className="col-md-12" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                                                        <ul id="progressbar" className="progressbar" style={{marginLeft:"-34px"}}>
                                                            <li id="progress-NOT_STARTED" className="active">Accepted<img data-src="img/green-tick.png" className="green-tick" /></li>
                                                            <li id="progress-IN_PROGRESS">Work In Progress<img data-src="img/green-tick.png" className="green-tick" /></li>
                                                            <li id="progress-COMPLETED">Completed<img data-src="img/green-tick.png" className="green-tick" /></li>
                                                            <li id="progress-DELIVERED">Delivered<img data-src="img/green-tick.png" className="green-tick" /></li>
                                                        </ul> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <div className="ibox">
                                            <div className="ibox-title" style={{borderRadius: "6px", height: "440px", fontSize: "18px"}}>
                                                
                                                <div className="row p-h-xs border-bottom">
                                                    <div className="col-md-6">
                                                        <strong>Customer Name: </strong>
                                                    </div>
                                                    <div className="col-md-6 text-right" id="div-customer">
                                                    </div>
                                                </div>
                                                <div className="row p-h-xs border-bottom">
                                                    <div className="col-md-6">
                                                        <strong>Date Accepted: </strong>
                                                    </div>
                                                    <div className="col-md-6 text-right" id="div-date">
                                                    </div>
                                                </div>
                                                <div className="row p-h-xs border-bottom">
                                                    <div className="col-md-6">
                                                        <strong>Receipt Number: </strong>
                                                    </div>
                                                    <div className="col-md-6 text-right" id="div-receipt">
                                                    </div>
                                                </div>
                                                <div className="row p-h-xs">
                                                    <div className="col-md-12">
                                                        <strong>Job Description: </strong>
                                                        <br/>
                                                        <span id="job-description"></span>
                                                    </div>
                                                </div>

                                                <div className="row p-h-xs" id="expedite-job" style={{display:"none"}}>
                                                    <div className="col-md-12">
                                                        <strong>Expedite Job</strong>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6" style={{paddingLeft: "30px"}}>
                                <div className="ibox " id="section-messages">

                                    <div className="ibox-title" style={{borderRadius: "6px"}}>


                                        <div id="messages-div" style={{height: "433px", marginTop: "15px", overflowY: "scroll"}}>

                                        </div>

                                        <div className="row border-top" style={{marginTop: "15px", paddingTop: "10px", paddingBottom: "10px"}}>

                                            <div className="col-md-9">
                                                <input type="text" id="custom-message" placeholder="Type your message here" className="form-control" style={{borderRadius: "6px", fontSize: "16px", height: "47px"}} />
                                            </div>
                                            <div className="col-md-3" style={{paddingLeft: "0px"}}>
                                                <a href="#" onClick={()=> this.supervisorPIN()} className="btn btn-lg inbox-btn-blue" style={{borderRadius:"6px"}} >
                                                    Send
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        );

    }

}

export default JobDetails;
