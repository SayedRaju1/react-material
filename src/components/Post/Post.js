import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Post.css'

const Post = (props) => {
    const { id, userId, title } = props.post;

    return (

        <div className="post">

            <h2>Post Title: {title}</h2>
            <h4>User ID: {userId}</h4>
            <h4>Post ID: {id}</h4>
            <Link style={{ textDecoration: 'none' }} to={`/post/${id}`}>
                <Button variant="outlined" color="primary" href="#outlined-buttons">
                    Details
                </Button>
            </Link>
        </div>
    );
};

export default Post;