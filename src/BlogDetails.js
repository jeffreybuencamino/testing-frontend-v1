import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams()
    return ( 
        <div className="blog-details">
            <h1>Blog Id: {id}</h1>
        </div>
     );
}
 
export default BlogDetails;