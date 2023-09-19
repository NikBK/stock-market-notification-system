import { Logo, SearchBar, NavbarActions } from "./index.js";

const Navbar = () => {

    return (
        <nav className="flex w-full justify-around h-14 bg-white fixed top-0 left-0 z-10">
            <Logo />
            <SearchBar />
            <NavbarActions />
        </nav>
    )
}

export default Navbar;
