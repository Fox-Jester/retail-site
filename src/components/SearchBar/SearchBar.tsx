import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className="search-group">
      <input
        id="shop-search-bar"
        type="text"
        placeholder="Search cool games!"
      ></input>
      <button id="shop-search-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
