import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarActions = () => {
    return (
        <>
            <div className="max-sm:hidden flex justify-around items-center text-sm">
                <button className="mx-4">Contact Us</button>
                <button className="border-solid border-2 border-slate-300 hover:border-slate-700 py-2 px-4 mx-4">SIGN UP</button>
                <button className="border-solid border-2 border-slate-300 hover:border-slate-700 py-2 px-4 mx-4">SIGN IN</button>
            </div>
            <div className="sm:hidden flex justify-center items-center w-8 h-8 rounded-full items-center my-auto mx-0">
                <FontAwesomeIcon icon={faUser} className="inline-block w-4 h-6 hover:cursor-pointer" />
            </div>
        </>
    )
}

export default NavbarActions;
