import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = ({ posts, onUpdate }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const postToEdit = posts.find((p) => p.id === parseInt(id));
        if (postToEdit) {
            setPost(postToEdit);
            setTitle(postToEdit.title);
            setContent(postToEdit.content);
        } else {
            navigate('/');
        }
    }, [id, posts, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post) {
            onUpdate({ ...post, title, content });
            navigate(`/post/${post.id}`);
        }
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="edit-post">
            <h1>Edit Post</h1>
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditPost;
