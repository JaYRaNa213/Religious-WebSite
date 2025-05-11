// export default function Blog() {
//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold">Religious Blogs</h2>
//       <p>We will load blogs here from the backend later.</p>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { getBlogs } from "../../services/api";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs()
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Failed to fetch blogs", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Religious Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow p-4 mb-3 rounded-lg">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-sm text-gray-500">{blog.date}</p>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
