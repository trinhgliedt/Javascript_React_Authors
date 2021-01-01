import React from 'react'
import axios from 'axios';
export default props => {
    const { authorId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className="btn btn-info mr-3" onClick={deleteAuthor}>
            Delete
        </button>
    )
}