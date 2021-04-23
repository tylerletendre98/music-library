import './filter.css';

  const SearchBox = ({searchBoxChange}) => {
    return(
        <div className="container">
            <div>
                <h3>Enter something you would like to filter by: </h3>
                <input type="text" placeholder="Search by Title, Artist, Album, Genre, or Release date..." className="filter " onChange = {searchBoxChange}/>
            </div>
        </div>
    )
    }
export default SearchBox;