import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {
    const [allPost, setAllPost] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setAllPost(data))
    })
    return (
        <div>
            <h1 className="h1">PostBook</h1>
            {
                allPost.map(post => <Post className="post" post={post}></Post>)
            }
        </div>
    );
};

export default Home;