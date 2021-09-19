import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import renderHTML from 'react-render-html';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://3.6.203.175:8080/get-blog/' + id);

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            { blog && <div className="card mt-3 mb-3" key={blog.id} >
                <div className="card-body">
                    <h5 className="card-title">{blog.blogHeading}</h5>
                    <p className="card-text">{renderHTML(blog.blogBody)}</p>
                    <p className="card-text badge bg-success">{blog.tag}</p>
                </div>
            </div>}
        </div>
    );
}

export default BlogDetails;