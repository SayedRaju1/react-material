import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './PostDetails.css'

const PostDetails = () => {
    const { idPost } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${idPost}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])


    return (
        <div>
            <h1 className="h1">PostBook</h1>
            <div className="post-detail-div">
                <h1 className="header">details of post # {idPost}</h1>
                <h3>Post Title: {post.title}</h3>
                <h4>Post Body: {post.body}</h4>

            </div>
            <div className="comment-div">
                <div >
                    <Comments postId={idPost}></Comments>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;