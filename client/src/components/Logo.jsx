import { logo } from "assets/images/app_logo.PNG";

const Logo = () => {
    return (
        <img
            alt="app-logo"
            src={logo}
            className="w-8 h-8 self-center hover:cursor-pointer"
        />
    )
}

export default Logo
