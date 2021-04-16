import './filter.css';

  const SearchBox = ({searchBoxChange}) => {
    return(
        <div>
            <input type="text" placeholder="search" onChange = {searchBoxChange}/>
        </div>
    )
    }
export default SearchBox;