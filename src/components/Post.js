import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Post = ({ posts, onDelete, onEdit }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="post">
                <h1>Post not found</h1>
                <button onClick={() => navigate('/')}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <button onClick={() => onDelete(post.id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>
        </div>
    );
};

export default Post;
