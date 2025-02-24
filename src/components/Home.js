// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ posts }) => {
    return (
        <div className="home">
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create">Create New Post</Link>
        </div>
    );
};

export default Home;
