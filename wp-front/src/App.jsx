import React, { useEffect, useState } from 'react'
import axios from "axios"
import Blog from './components/blog';

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("https://digiwebcam.in/market/wp-json/wp/v2/posts")
      .then((res) => {
         //console.log(res.data);  // Logs the fetched posts to the console.
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      {
        posts.map((item) => (
          <Blog
            key={item.id} // Add a unique key prop here
            post={item}
          />
        ))
      }
    </div>
  );
}