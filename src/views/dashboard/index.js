import React, { Component } from 'react'
import DashboardComponent from './component'
import connect from "react-redux/es/connect/connect";

class Dashboard extends Component {
    render() {
        return (
            <DashboardComponent/>
        )
    }
}

export default Dashboard