import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <ul className="list-group mb-3">
      {posts.map(post => (
        <li key={post.id} className="list-group-item">
          <h3>{post.name}</h3>
          <div className="row" style={{ padding: "2%" }}>
            <div className="col-lg-6 col-sm">
              <h6>{post.episode}</h6>
            </div>
            <div className="col-lg-6 col-sm" style={{ float: "right" }}>
              <h6>{post.air_date}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
