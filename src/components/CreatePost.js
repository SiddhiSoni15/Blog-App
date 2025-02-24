// src/components/CreatePost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ title, content });
        navigate('/');
    };

    return (
        <div className="create-post">
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreatePost;
