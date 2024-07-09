import axios from "axios";
import React, { useEffect, useState } from "react";
import "./blog.css";

export default function blog({ post }) {
    //console.log(post.title)
  const [featuredImage, setFeaturedimage] = useState();

//   const getImage = () => {
//     axios
//      .get(post?.href)
//      .then((response) => {
//       setFeaturedimage(response.data.source_url);
//     });
//   };
const getImage = () => {
    fetch(post?.href)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setFeaturedimage(data.source_url);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="container">
      <div className="blog-container">
        <p className="blog-date">
          {new Date(Date.now()).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 className="blog-title">{post.title.rendered}</h2>
        <p
          className="blog-excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <img src={featuredImage} class="mask" />
      </div>
    </div>
  );
}