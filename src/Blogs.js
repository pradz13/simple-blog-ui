import AboutUs from "./AboutUs";
import Blog from "./Blog";
import useFetch from "./useFetch";
import { useState } from "react";

const Blogs = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8080/get-blogs');
    const [filterTag, setFilterTagData] = useState('All');

    const filterTagSelection = (data) => {
        setFilterTagData(data);
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <div className="row">
                <div className="col-8">
                    {blogs && <Blog blogs={blogs} filterTag={filterTag}/>}
                </div>
                <div className="col-4">
                    <AboutUs filterTagSelection = {filterTagSelection}/>
                </div>
            </div>
        </div>
    );
}

export default Blogs;