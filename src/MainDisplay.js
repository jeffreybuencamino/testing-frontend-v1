import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import meme from "./assets/nicolasCageMeme.png"


const MainDisplay = ({user}) => {
    // Use relative URL so the CRA dev server proxy (package.json "proxy") will forward requests
    const {data, message, isLoading, error} = useFetch("/blogs")

    // Show login prompt if user is not authenticated
    if (!user) {
        return (
            <div className="home">
                <h1>Welcome to Jeff's Blog</h1>
                <div className="auth-prompt">
                    <h2>Please sign in to view blog posts</h2>
                    <p>You need to be logged in to access the blog content.</p>
                    <div className="auth-links">
                        <Link to="/login" className="auth-link">Login</Link>
                        <span> or </span>
                        <Link to="/signup" className="auth-link">Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }

    // Show blog content if user is authenticated
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