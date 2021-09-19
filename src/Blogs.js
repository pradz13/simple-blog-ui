import AboutUs from "./AboutUs";
import Blog from "./Blog";
import useFetch from "./useFetch";
import { useState } from "react";

const Blogs = () => {
    const { error, isPending, data: blogs } = useFetch('http://3.6.203.175:8080/get-blogs');
    const [filterTag, setFilterTagData] = useState('All');

    const filterTagSelection = (data) => {
        setFilterTagData(data);
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <AboutUs filterTagSelection={filterTagSelection} />
            {blogs && <Blog blogs={blogs} filterTag={filterTag} />}
        </div>
    );
}

export default Blogs;