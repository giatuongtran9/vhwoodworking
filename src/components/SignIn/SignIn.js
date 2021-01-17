import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {login} from '../../services/auth.service' 

const SignIn = (props) => {
    const history = useHistory()
    const [state, setState] = useState({
        name: "",
        password: "",
    })

    const [errors, setErrors] = useState({})

    const validate = (value) => {
        const errors = {}

        if (!value.name) {
            errors.user = 'Username is required!'
        }

        if (!value.password) {
            errors.pass = 'Password is required!'
        }
    
        return errors
    }


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = validate(state)
        const noErr = Object.keys(validationErrors).length === 0
        setErrors(validationErrors)
        if (noErr) {
            login(state.name, state.password).then(() => {
                history.push("/");
                window.location.reload();
            })
        } else {
            console.log("errors try again",validationErrors);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <label>
                Name:
                <input type="text" name="name" value={state.name} onChange={handleChange}/>
            </label>
            <br/>
            {errors.user}
            <br/>
            <label>
                Password:
                <input type="password" name="password" value={state.password} onChange={handleChange}/>
            </label>
            <br/>
            {errors.pass}
            <br/>
            <button type="submit">Sign In</button>
        </form>
    )
}

export default SignIn