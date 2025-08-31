
import "./SearchBar.css"

export default function SearchBar(){


    return(

        <div className="search-group">
            <input id="shop-search-bar" type="text" placeholder="Search cool games!"></input>
            <button id="shop-search-btn">Search</button>
        </div>
    )
}