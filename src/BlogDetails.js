import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import meme from "./assets/nicolasCageMeme.png";

const BlogDetails = () => {

    const { id } = useParams()

    // Use relative URL for dev proxy
    const { data, isLoading,error} = useFetch('/blog/' + id)

    return ( 

        <div>

        {error && (
            <div className="error-template">
                <h2>Oops! Something went wrong!</h2>
                <p>{error}</p>
                <img src={meme} alt="Error placeholder" />
            </div>
        )}

        {isLoading && <div>Loading...</div>}

        {data && (<article>
            <div className="blog-details">
                <h1>{data.title}</h1>
                <p>Blog Id: {id}</p>

                <h3>Subject: {data.subject}</h3><br />

                <p>{data.body}</p>
            </div>
        </article>)}
        </div>
     );
}
 
export default BlogDetails;