const AboutUs = () => {
    return (
        <div className="card mt-3 mb-3" >
            <div className="card-body">
                <h5 className="card-title">About us</h5>
                <p className="card-text">This website provides your daily dose of entertainment with unbiased reviews, recommendations and analytical articles on books, films and web shows.</p>
                <p className="card-text">Filter posts by -</p>
                <span className="badge bg-primary mx-2">Films</span>
                <span className="badge bg-secondary mx-2">Books</span>
                <span className="badge bg-success mx-2">Web Series</span>
                <span className="badge bg-info mx-2">Miscelleneous</span>
            </div>
        </div>);
}

export default AboutUs;