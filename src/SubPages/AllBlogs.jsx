import React, { useState, useEffect } from "react";
import { BlogItem } from "../Components";
import { client } from "../client";

const AllBlogs = ({ setSingleBlog }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "blogs"]`).then((res) => setBlogs(res));
  }, []);

  return (
    <div>
      <div className="container allBlogs">
        <h1>
          All Blogs <span>.</span>
        </h1>

        <div className="all--blogs">
          {blogs.map((blog) => (
            <div>
              <BlogItem item={blog} setSingleBlog={setSingleBlog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
