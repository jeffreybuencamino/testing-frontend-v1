import { Link } from "react-router-dom";

const MainDisplay = ({message, handleAddBookButton, data}) => {
    return ( 
        <div className="home">
            <h1>message from backend: { message}</h1>
            <div className="blog-list">
                <h2>Title: </h2>
                {data.map(blog => (
                    <div className="blog-preview" key={blog._id}>
                        <Link to={`/blog/${blog._id}`}>
                        <h2>{blog.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
            <button onClick={handleAddBookButton}>Click me</button>
        </div>
     );
}
 
export default MainDisplay;