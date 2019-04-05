import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import LoginComponent from './component'
import { login } from '../../../store/auth/action'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        }
    }
    handleChange = (name, value) => {
        this.setState({credentials: {...this.state.credentials, [name]: value}})
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        await this.props.login(this.state.credentials)

    }
    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };

        if (this.props.auth.logged) {
            return <Redirect to={from} />;
        }
        const props = {
            email: this.state.credentials.email,
            password: this.state.credentials.password,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
        }

        return (
            <LoginComponent {...props}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.authenticate
    }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)