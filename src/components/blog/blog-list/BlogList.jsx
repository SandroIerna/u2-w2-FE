import React from "react";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const [posts, setPosts] = useState([]);

  const getBlogPosts = async () => {
    try {
      let res = await fetch(
        "https://u2-d3-backend-production.up.railway.app/articles"
      );
      if (res.ok) {
        let data = await res.json();
        setPosts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);
  return (
    <Row>
      {posts &&
        posts.map((post) => (
          <Col
            md={4}
            style={{
              marginBottom: 50,
            }}
            key={post._id}
          >
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
    </Row>
  );
};

export default BlogList;
