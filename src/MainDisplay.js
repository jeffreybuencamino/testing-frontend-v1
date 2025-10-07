import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import meme from "./assets/nicolasCageMeme.png"


const MainDisplay = () => {
    // Use relative URL so the CRA dev server proxy (package.json "proxy") will forward requests
    const {data, message, isLoading, error} = useFetch("/blogs")


    return ( 
        <div className="home">
            <h1>{ message}</h1>
            <div className="blog-list">
                {error && (
                <div className="error-template">
                    <h2>Oops! Something went wrong!</h2>
                    <p>{error}</p>
                    <img 
                        src={meme}
                        alt="Error placeholder"
                    />
                </div>
            )}

                {isLoading && <div>Loading...</div>}

                {data && (
                    <>
                <br /><br /><h2>All Posts</h2>
                {data.map(blog => (
                    <div className="blog-list" key={blog._id}>
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
                    </div>
                ))}
                </>
            )}
            </div>
            {/* <button onClick={handleAddBookButton}>Click me</button> */}
        </div>
     );
}
 
export default MainDisplay;