import React, { useState, useEffect } from 'react'
import './Comment.css'
import axios from 'axios'
import {getcurrentUser } from '../../services/auth.service'
import apiUrl from '../../api.js'
import removeIcon from '../../image/delete.png'

const Comment = () => {

    const [text, setText] = useState([])
    const [input, setInput] = useState("")
    const [update, setUpdate] = useState(false)
    const user = getcurrentUser()


    useEffect(() => {
        axios.get(apiUrl + '/auth/comment')
        .then(res => setText(res.data))
    }, [update])

    const handleDelete = id => {
        axios.delete(apiUrl + `/auth/comment/${id}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
            setText(text.filter(i => i._id !== id))
        })
    }

    const comments = text.map((comment) => {
        return <div className="card text-white bg-dark" style={{width: '50vw'}}>
                    {user !== null && user.role === 'admin' ? <div className="card-header">
                        <a onClick={() => handleDelete(comment._id)}><img className="remove-icon" src={removeIcon} img="removeIcon"/></a>
                    </div> : ''}
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{comment.text}.</p>
                            <p>{comment._id}</p>
                            <footer className="blockquote-footer">Posted on {comment.date} by <cite title="Source Title">{comment.user.name}</cite></footer>
                        </blockquote>
                    </div>
                </div>
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const addComment = i => {
        axios.post(apiUrl + '/auth/comment', i)
        .then(res => {
            console.log(res)
            setUpdate(!update)
            setInput('')
        })
        .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addComment({text: input, userId: user.id})
    }


    return (
        <div className="comment-container">
            {comments}
            {user !== null ? <form onSubmit={handleSubmit}>
                <textarea placeholder="Leave comment here" className="text-area" value={input} onChange={handleChange}/>
                <button type="submit">Add</button>
            </form> : ''}
        </div>
    )
}

export default Comment