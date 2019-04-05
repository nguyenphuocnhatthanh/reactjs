import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderComponent from './component'

class Header extends Component {
    render() {
        return (
            <HeaderComponent/>
        )
    }
}


export default connect()(Header)