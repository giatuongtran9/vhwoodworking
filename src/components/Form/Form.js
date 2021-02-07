import React, { useState, useEffect } from 'react'
import ReactFile from 'react-file-base64'
import axios from 'axios'
import apiUrl from '../../api'
import { Link } from 'react-router-dom'

const Form = () => {

    const [data, setData] = useState([{}])

    const [state, setState] = useState({
        productName: "",
        name: "",
        typeName: "",
        img: "",
        alt: "",
        kind: ""
    })

    const [mess, setMess] = useState('')

    useEffect(() => {
        axios.get(apiUrl + '/products').then(res => setData(res.data))
    }, [state])

    console.log(data)

    const createProduct = (newProduct) => {
        const headers = {
            'Content-Type': 'application/json'
        }
        const url2 = `${apiUrl}/product/${state.productName}/${state.name}`
        console.log(url2)
        axios.post(url2, newProduct, {headers: headers})
        .then((res) => {
            console.log(res)
            setState({
                productName: "",
                name: "",
                typeName: "",
                img: "",
                alt: "",
                kind: ""
            })
            setMess(res.data.message)
        })
        .catch((err) => console.log(err))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        createProduct(state)
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const a = data.map((d) => {
        return <option key={d._id} value={d.productName}>{d.productName}</option>
    })

    const b = data.filter((d) => d.productName === state.productName).map((i) => i.products.map((q) => {
        return <option key={q._id} value={q.name}>{q.name}</option>
    }))

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h1>Add new Product</h1>
            <label>
                Product Name:
                <select name="productName" onChange={handleChange} value={state.productName}>
                    {a}
                </select>

            </label>
            <br/>
            <label>
                Name:
                <select name="name" onChange={handleChange} value={state.name}>
                    {b}
                    <option></option>
                </select>

            </label>
            <br/>
            <label>
                Type Name:
                <input type="text" name="typeName" value={state.typeName} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Image Name:
                <input type="text" name="alt" value={state.alt} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Kind:
                <input type="text" name="kind" value={state.kind} onChange={handleChange}/>
            </label>

            <div className="file-input">
                <ReactFile 
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setState({...state, img: base64 })}
                />
            </div>
            <br/>
            {mess ?? (
                <div className="form-group">
                    <div className="alert alert-success">{mess}</div>
                </div>
            )}
            <br/>
            <button type="submit">Add</button>
            <br/>
            <br/>
            <Link to='/'>Go back to home page</Link>
        </form>
        </div>
    )
}

export default Form