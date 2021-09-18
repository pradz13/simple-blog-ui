import { Link } from 'react-router-dom';

const Blog = ({ blogs, filterTag }) => {
    return (
      <div>
        {blogs.filter(blog => {
          if(filterTag ===  'All') {
            return true;
          } else {
            return blog.tag === filterTag;
          }
        }).map(blog => (
          <div className="card mt-3 mb-3" key={blog.id} >
              <div className="card-body">
                <h5 className="card-title">{ blog.blogHeading }</h5>
                <p className="card-text badge bg-success">{ blog.tag }</p>
                <br/>
                <Link to={`/show-blog-detail/${blog.id}`} className="btn btn-dark">Read More</Link>
              </div>
          </div>
        ))}
      </div>
    );
  }
 
export default Blog;