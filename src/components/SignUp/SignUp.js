import React, { useState } from 'react'
import {signup} from '../../services/auth.service' 
import { Link } from 'react-router-dom'


const SignUp = () => {
    const [state, setState] = useState({
        name: "",
        password: "",
    })

    const [mess, setMess] = useState('')
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        signup(state).then(response => {
            setMess(response.data.message)
            setSuccess(true)
            setState({
                name: '',
                password: ''
            })
        }, error => {
            setMess(error.response.data.errors)
            setSuccess(false)
        })

    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
            <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
            <label>
                Name:
            </label>
            <br/>
            <input type="text" name="name" value={state.name} onChange={handleChange} required/>
            
            </div>
            <br/>
            <div className="form-group">
            <label>
                Password:
            </label>
            <br/>
            <input type="password" name="password" value={state.password} onChange={handleChange} required/>
            
            </div>

            {mess && (
                <div className="form-group">
                    <div className={success ? "alert alert-success" : "alert alert-danger"} role="alert">{mess}</div>
                </div>
            )}
            <br/>
            <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
            <br/>
            <Link to="/signin">Click here to Sign In</Link>
        </form>
            </div>
        </div>
    )
}

export default SignUp