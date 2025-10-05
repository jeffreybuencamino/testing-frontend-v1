import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()

    const { data} = useFetch('http://localhost:3000/blog/' + id)

    return ( 

        <article>
            <div className="blog-details">
                <h1>{data.title}</h1>
                <p>Blog Id: {id}</p>

                <h3>Subject: {data.subject}</h3><br />

                <p>{data.body}</p>
            </div>
        </article>
     );
}
 
export default BlogDetails;