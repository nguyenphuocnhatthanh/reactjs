import React, { Component } from 'react'
import { connect } from 'react-redux'
import { check, me } from '../store/auth/action'
import Header from "../views/shared/Header";
import routes from "../routes";
import '../App.scss'

class App extends Component {
    componentWillMount() {
        this.props.check()
        if (this.props.auth.token) {
            this.props.me()
        }
    }
    render() {
        return (
            <div>
                <Header/>
                {routes}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.authenticate
    }
}

const mapDispatchToProps = {
    check,
    me
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
