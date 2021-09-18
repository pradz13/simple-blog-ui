const AboutUs = ({filterTagSelection}) => {
    return (
        <div className="card mt-3 mb-3" >
            <div className="card-body">
                <h5 className="card-title">About us</h5>
                <p className="card-text">This website provides your daily dose of entertainment with unbiased reviews, recommendations and analytical articles on books, films and web shows.</p>
                <p className="card-text">Filter posts by -</p>
                <span className="badge bg-primary mx-2 filter-tag" onClick={() => filterTagSelection('All')}>All</span>
                <span className="badge bg-primary mx-2 filter-tag" onClick={() => filterTagSelection('Films')}>Films</span>
                <span className="badge bg-secondary mx-2 filter-tag" onClick={() => filterTagSelection('Books')}>Books</span>
                <span className="badge bg-success mx-2 filter-tag" onClick={() => filterTagSelection('Web Series')}>Web Series</span>
                <span className="badge bg-info mx-2 filter-tag" onClick={() => filterTagSelection('Misc')}>Miscelleneous</span>
            </div>
        </div>);
}

export default AboutUs;