import React, { useEffect, useState } from 'react';
import './Comments.css'

const Comments = (props) => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div>
            <h1 className="header">commments for this post</h1><br />
            <div className="comment">
                {
                    comments.map((comment) => <div>
                        <h4>Name: {comment.name}</h4>
                        <small>Email: {comment.email}</small>
                        <p>Comment: {comment.body}</p><br />
                    </div>)
                }
            </div>



        </div>
    );
};

export default Comments;