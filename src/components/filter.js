import './filter.css';

  const SearchBox = ({searchBoxChange}) => {
    return(
        <div>
            <div>
                <input type="text" placeholder="Search by Title, Artist, Album, Genre, or Release date..." className="filter " onChange = {searchBoxChange}/>
            </div>
        </div>
    )
    }
export default SearchBox;