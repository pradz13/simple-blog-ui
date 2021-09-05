import { Link } from 'react-router-dom';

const Blog = ({ blogs }) => {
    return (
      <div>
        {blogs.map(blog => (
          <div className="card mt-3 mb-3" key={blog.id} >
              <div className="card-body">
                <h5 className="card-title">{ blog.blogHeading }</h5>
                <p className="card-text">{ blog.blogBody }</p>
                <p className="card-text">{ blog.tag }</p>
                <Link to={`/show-blog-detail/${blog.id}`} className="btn btn-dark">Read More</Link>
              </div>
          </div>
        ))}
      </div>
    );
  }
 
export default Blog;