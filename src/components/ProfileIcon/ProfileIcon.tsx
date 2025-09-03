import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./ProfileIcon.css"

export default function ProfileIcon(){




    return(
        <>
        <Link to="login">
        <div id="account-group">
        <FontAwesomeIcon  icon={faUser}/>
        <span>Sign in <br /> <b>Account</b></span>
        </div>
        
        </Link>
        </>
    )
}