import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace with the actual Stranger's Things API endpoint for posts
        const response = await axios.get('https://strangers-things.herokuapp.com/api/your-cohort-name/posts');
        if (response.data.success) {
          setPosts(response.data.data.posts);
        } else {
          console.error('Error fetching posts:', response.data.error.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts">
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            {/* You can add more details from the post object as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
