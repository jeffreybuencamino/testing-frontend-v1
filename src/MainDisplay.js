import { Link } from "react-router-dom";
import useFetch from "./useFetch";


const MainDisplay = () => {
  const {data, message} = useFetch("http://localhost:3000/blogs")


    return ( 
        <div className="home">
            <h1>{ message}</h1>
            <div className="blog-list">
                <br /><br /><h2>All Posts </h2>
                {data.map(blog => (
                    <div className="blog-preview" key={blog._id}>
                        <Link to={`/blog/${blog._id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>{blog.author}</p>
                        </Link>
                        <button>
                            <Link to={`/edit/${blog._id}`}>Update Blog</Link>
                        </button>
                    </div>
                ))}
            </div>
            {/* <button onClick={handleAddBookButton}>Click me</button> */}
        </div>
     );
}
 
export default MainDisplay;