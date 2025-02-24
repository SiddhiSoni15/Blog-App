import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([]);

    const handleCreatePost = (post) => {
        post.id = posts.length + 1;
        setPosts([...posts, post]);
    };

    const handleDeletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    const handleEditPost = (id) => {
        // Navigate to the EditPost component
        window.location.href = `/edit/${id}`;
    };

    const handleUpdatePost = (updatedPost) => {
        setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
    };

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route exact path="/" element={<Home posts={posts} />} />
                    <Route
                        path="/post/:id"
                        element={<Post posts={posts} onDelete={handleDeletePost} onEdit={handleEditPost} />}
                    />
                    <Route path="/create" element={<CreatePost onCreate={handleCreatePost} />} />
                    <Route path="/edit/:id" element={<EditPost posts={posts} onUpdate={handleUpdatePost} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
