import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-cohort' with your actual cohort name in the URL
        const response = await axios.get('https://strangers-things.herokuapp.com/api/your-cohort/posts');
        setPosts(response.data.data.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <header className="header">
        {/* Navigation bar */}
      </header>
      <main className="main">
        <h2>Stranger Things Shop</h2>
        <div className="post-list">
          {posts.map((post) => (
            <div className="post-card" key={post._id}>
              <img src={post.imageUrl} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>Price: ${post.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
