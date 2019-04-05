import React, { Component } from 'react'
import BarComponent from './component'
import connect from "react-redux/es/connect/connect";

class Bar extends Component {
    render() {
        return (
            <BarComponent/>
        )
    }
}

export default connect()(Bar)