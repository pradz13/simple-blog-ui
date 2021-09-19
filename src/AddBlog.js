import { useState } from "react";

const AddBlog = () => {
    const [blogHeading, setBlogHeading] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [tag, setTag] = useState('Films');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { blogHeading, blogBody, tag };

        fetch('http://3.6.203.175:8080/add-blog/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Blog added');
            alert('Blog Added');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Blog title:</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={blogHeading}
                        onChange={(e) => setBlogHeading(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Blog body:</label>
                    <textarea
                        rows="10"
                        className="form-control"
                        required
                        value={blogBody}
                        onChange={(e) => setBlogBody(e.target.value)}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Blog Tag:</label>
                    <select
                        className="form-control"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    >
                        <option value="Films">Films</option>
                        <option value="Web Series">Web Series</option>
                        <option value="Books">Books</option>
                        <option value="Misc">Misc</option>
                    </select>
                </div>
                <button className="btn btn-dark">Add Blog</button>
            </form>
        </div>
    );
}

export default AddBlog;