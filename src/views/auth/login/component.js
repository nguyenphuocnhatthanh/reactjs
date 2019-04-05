import React from 'react'
import PropTypes from 'prop-types'

const Login = ({ email, password, handleChange, handleSubmit }) => (
    <form onSubmit={ handleSubmit }>
        <label htmlFor="email" className="sr-only">Email</label>
        <input type="text"
               className={`form-control form-control-lg rounded-0`}
               name="email"
               id="email"
               placeholder="Email address"
               value={email || ''}
               onChange={e => handleChange(e.target.name, e.target.value)}
             />

        <label htmlFor="password" className="sr-only">Password</label>
        <input type="password"
               className={`form-control form-control-lg rounded-0`}
               name="password"
               id="password"
               value={password || ''}
               onChange={e => handleChange(e.target.name, e.target.value)}
        />

        <button type="submit">Login</button>
    </form>
)

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Login