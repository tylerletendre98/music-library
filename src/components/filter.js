import './filter.css';

  const SearchBox = ({searchBoxChange}) => {
    return(
        <div>
            <input type="text" placeholder="Search by Title, Artist, Album, Genre, or Release date..." className="filter " onChange = {searchBoxChange}/>
        </div>
    )
    }
export default SearchBox;