import AboutUs from "./AboutUs";
import Blog from "./Blog";
import useFetch from "./useFetch";
const Blogs = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8080/get-blogs');
    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <div className="row">
                <div className="col-8">
                    {blogs && <Blog blogs={blogs} />}
                </div>
                <div className="col-4">
                    <AboutUs/>
                </div>
            </div>
        </div>
    );
}

export default Blogs;