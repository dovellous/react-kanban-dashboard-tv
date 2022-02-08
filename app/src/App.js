import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LoginForm from './LoginForm.js';
import Zones from './Zones.js';
import Dashboard from './Dashboard.js';
import './App.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import { FCM } from "@capacitor-community/fcm";
import { PushNotifications } from "@capacitor/push-notifications";

//import KioskMode from 'cordova-plugin-kiosk-mode/www/kiosk-mode.js'
//import {AutoStart} from 'cordova-plugin-autostart/www/auto-start'

const axios = require('axios');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            zoneState: false,
            workshopState: false,
            jobState: false,
            workshopId: 0,
            objectId: 0,
            action: "",
            userData: null,
            token_id: 0,
            token_ready: false,
            workshops: [],
            jobs: [],
            jobDetails: "",
            stateName: "UNDEFINED"
        };

        // Bind the this context to the handler function
        this.handlerLogin = this.handlerLogin.bind(this);
        this.handlerWorkshops = this.handlerWorkshops.bind(this);
        this.handlerZoneView = this.handlerZoneView.bind(this);
        this.handlerWorkshopView = this.handlerWorkshopView.bind(this);
        this.handlerJobView = this.handlerJobView.bind(this);
        this.handlerLogout = this.handlerLogout.bind(this);

        //Autostart.enable();
        //KioskMode.enable();

        this.IS_DEBUG = true;

        if(!this.IS_DEBUG){
            this.addListeners();
        }

    }

    componentDidMount() {

        let self = this;

        let localUserObject = reactLocalStorage.getObject("userObject");

        if (localUserObject && "tenant_id" in localUserObject ){

            this.handlerLogin(localUserObject);

            setTimeout(function () {

                if (!self.state.loggedIn){

                    window.location.reload();

                    this.setState({
                        loggedIn: true,
                        userData: localUserObject
                    });

                }

            },10000);

        }

    }

    addActionListeners(data){

        const self = this;

        window.addEventListener("RECEIVED_ACTION", function(e){

                        const data = e.detail.data.message.split(",");

                        const action   = data[0];
                        const objectId = data[1];

                        console.log("FIRED EVENT DATA [action, objectId]", action, objectId);

                        switch(action){

                            case "view_workshops" : {
                                self.handlerZoneView(objectId);
                                break;
                            }

                            case "view_kanban" : {
                                self.handlerWorkshopView(objectId);
                                break;
                            }

                            case "view_job" : {
                                self.handlerJobView(objectId);
                                break;
                            }

                            default : {

                                break;

                            }

                        }

                    });
    }

    async addListeners(){

        const self = this;

        window.FCMW = FCM;

        window.PUSH = PushNotifications;

        console.log("ADDING LISTENERS...");
        // external required step
        // register for push

        // Get FCM token instead the APN one returned by Capacitor
        /*
        FCM.getToken()
            .then((r) => console.log(`Token ${r.token}`))
            .catch((err) => console.log("TOKEN ERROR", err));
            */


        await PushNotifications.addListener('registration', token => {
            console.info('Registration token: ', token.value);

            this.setState({
                token_id: token.value
            });

            console.log("UPDATING TOKEN...", token);

            self.pushTokenToServer();

        });

        /*

        await PushNotifications.addListener('registrationError', err => {
            console.error('Registration error: ', err.error);
        });

        await PushNotifications.addListener('pushNotificationReceived', notification => {
            console.log('Push notification received: ', notification);
        });

        await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
            console.log('Push notification action performed', notification.actionId, notification.inputValue);
        });

        */

        this.registerNotifications();

    }

    async registerNotifications(){


        console.log("REGISTERING NOTIFICATIONS...");


        let permStatus = await PushNotifications.checkPermissions();

        if (permStatus.receive === 'prompt') {
            permStatus = await PushNotifications.requestPermissions();
        }

        if (permStatus.receive !== 'granted') {
            throw new Error('User denied permissions!');
        }

        await PushNotifications.register();
    }

    async getDeliveredNotifications(){
        const notificationList = await PushNotifications.getDeliveredNotifications();
        console.log('delivered notifications', notificationList);
    }

    pushTokenToServer(){

        const self = this;

        let TOKEN_ID = this.state.token_id;

        if( TOKEN_ID === 0){
            TOKEN_ID = "fB-whwlgSfK7Rb8kDgZDrB:APA91bEMDm51NMpS3S8S7ypyvW403txRDkMgo3vRT9EHPJi4p0WgxIdmrvdDND0LLhPO_EEKAkPkic-g_zpn3GmcjVQxsWkStG8ECIY4qYFtAVTNbGOpr_YfdMtXwD8BiVhmET9F-itw";
        }

        const tokenData = {
            user_id: this.state.userData.id,
            username: this.state.userData.username,
            tenant_id: this.state.userData.tenant_id,
            token_id: TOKEN_ID,
            userData: this.state.userData,
        };

        console.warn("HANDLE LOGIN", this.state);

        axios.defaults.headers.post['Content-Type'] ='application/json; charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.post('https://communicator.hyperefficient2.net/index.php/display/save_device_token', tokenData)
            .then(function (response) {
                // handle success
                console.log("TOKEN_REGISTERED RESPONSE::", response);

                self.addActionListeners();

                const event = new CustomEvent('TOKEN_REGISTERED', { detail: {token_id: TOKEN_ID} });

                window.dispatchEvent(event);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                //console.log(1234567890);
            });
    }

    // This method will be sent to the child component
    handlerLogin( data ) {

        const self = this;

        this.setState({
            loggedIn: true,
            userData: data
        });


        if(this.IS_DEBUG) {
            self.pushTokenToServer();
        }

    }

    // This method will be sent to the child component
    handlerWorkshops( data ) {

        this.setState({
            workshops: data,
            zoneState: true
        });

        console.log("WORKSHOPS :::: ", [data, this.state]);

    }

    // This method will be sent to the child component
    handlerJobView( jobId ) {

        const self = this;

        this.setState({
            zoneState: false,
            wokshopState: false,
            jobState: true,
            objectId: jobId,
            action: "VIEW_WORKSHOP_JOBS",
            stateName: "JOB_DETAILS"
        });

        setTimeout(
            function(){

                console.log("JOBS VIEW ID :::: ", jobId, self.state);

            },10);

    }

    // This method will be sent to the child component
    handlerWorkshopView( workshopId ) {

        const self = this;

        this.setState({
            zoneState: false,
            wokshopState: true,
            jobState: false,
            objectId: workshopId,
            action: "VIEW_ZONE_WORKSHOP_KANBAN",
            stateName: "KANBAN"
        });

        setTimeout(
            function(){

                console.log("WORKSHOP KANBAN VIEW ID :::: ", workshopId, self.state);

            },10);

    }

    // This method will be sent to the child component
    handlerZoneView( zoneId ) {

        const self = this;

        this.setState({
            zoneState: true,
            wokshopState: false,
            jobState: false,
            objectId: zoneId,
            action: "VIEW_USER_ZONE_WORKSHOPS",
            stateName: "WORKSHOP_TILES"
        });

        setTimeout(
            function(){

                console.log("ZONE WORKSHOP LIST VIEW ID :::: ", zoneId, self.state);

            },10);

    }

    // This method will be sent to the child component
    handlerLogout( ) {

        const self = this;

        if (window.confirm("Do you really want to logout?")) {


            reactLocalStorage.remove("rememberMe");

            reactLocalStorage.remove('loginCredentials');

            reactLocalStorage.remove('userObject');

            setTimeout(function(){

                self.setState({
                    loggedIn: false,
                    userData: null
                });

                console.warn("HANDLE LOGOUT", this.state);


            },1000)

        }


    }

    render() {

        return (

            !this.state.loggedIn 
                ? 
                    <LoginForm action={this.handlerLogin}  workshops={this.handlerWorkshops} /> 
                : 
                    this.state.zoneState 
                        ? 
                            <Zones actionLogout={this.handlerLogout} viewWorkshops={this.handlerWorkshopView} workshops={this.state.workshops} userData={this.state.userData} /> 
                        : 
                            <Dashboard appState={this.state} actionLogout={this.handlerLogout} userData={this.state.userData} workshopId={this.state.workshopId} />

        );

    }

}

export default App;
