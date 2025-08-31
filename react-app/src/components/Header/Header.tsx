import Logo from "../Logo"
import "./Header.css"

function Header(){

    return (
    <header>
        
        <Logo />
        <a href="">Store</a>
        <a href="">Library</a>
        <a href="#">About</a>
        <a href="#">Settings</a>
    </header>

    )
}

export default Header