import Logo from "../Logo";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import IconGroup from "../IconGroup/IconGroup";

function Header() {
  return (
    <header>
      <Logo />
      <div className="header-group">
        <IconGroup text="Login">
          <FontAwesomeIcon icon={faUser} />
        </IconGroup>
        <IconGroup text="Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </IconGroup>
      </div>
    </header>
  );
}

export default Header;
