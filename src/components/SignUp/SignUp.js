import React, { useState } from 'react'
import {signup} from '../../services/auth.service' 

const SignUp = () => {
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
        else if (value.name.length < 3 || value.name.length > 20) {
            errors.user = 'Username must between 3 and 20 characters'
        }

        if (!value.password) {
            errors.pass = 'Password is required!'
        }
        else if (value.password.length < 3 || value.password.length > 40) {
            errors.pass = 'Password must between 3 and 40 characters'
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
            console.log("Authenticated", state)
            signup(state)
        } else {
            console.log("errors try again",validationErrors);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
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
            <button type="submit">Create</button>
        </form>
    )
}

export default SignUp