

import ToggleBtn from "../button/ToggleBtn"
import MenuItem from "../menubar/MenuItem"
import ResponsiveMenu from "../menubar/responsiveMenu/ResponsiveMenu"
import Logo from "./Logo"

const Header = () => {

    return (
        <div className="w-full h-full overflow-hidden px-2 md:px-8 lg:px-20 py-4 border-b" >
            <div className="w-full items-center flex justify-between">
                <Logo />
                <nav>
                    <menu className="relative zIndex">
                        <ResponsiveMenu />
                        <ul className="hidden lg:flex items-center gap-10">
                            <MenuItem linkName={"Home"} />
                            <MenuItem linkName={"About"} />
                            <MenuItem linkName={"Project"} />
                            <MenuItem linkName={"Contact"} />
                        </ul>
                        <div className="block lg:hidden">
                            <ToggleBtn />
                        </div>
                    </menu>
                </nav>
            </div>
        </div>
    )
}

export default Header
