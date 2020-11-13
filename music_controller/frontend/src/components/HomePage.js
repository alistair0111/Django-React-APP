import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Redirect, Link
    } from 'react-router-dom';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/'><h1>This the home page</h1></Route>
                    <Route path="/join" component={RoomJoinPage}/>
                    <Route path="/create" component={CreateRoomPage}/>
                </Switch>
            </Router>
        );
    }
}