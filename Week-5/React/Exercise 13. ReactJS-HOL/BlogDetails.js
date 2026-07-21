import React from "react";

const blogs = [
  {
    id: 1,
    title: "React Learning",
    author: "Stephen Eric",
    description: "Welcome to learning React"
  },
  {
    id: 2,
    title: "Installation",
    author: "Schwetzenier",
    description: "You can install React from npm."
  }
];

function BlogDetails() {

  return (

    <div
      style={{
        borderLeft: "3px solid green",
        paddingLeft: "20px"
      }}
    >
      <h2>Blog Details</h2>

      {blogs.map(blog => (

        <div key={blog.id}>

          <h3>{blog.title}</h3>

          <strong>{blog.author}</strong>

          <p>{blog.description}</p>

        </div>

      ))}

    </div>

  );
}

export default BlogDetails;