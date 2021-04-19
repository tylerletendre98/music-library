import './filter.css';

  const SearchBox = ({searchBoxChange}) => {
    return(
        <div>
            <input type="text" placeholder="search" className="filter " onChange = {searchBoxChange}/>
        </div>
    )
    }
export default SearchBox;