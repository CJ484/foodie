import Image from "next/image";
import { logo } from "../../../assets/Images";

const MobileNav = () => {
    return (
        <div>
            <div>
                <Image src={logo} alt="Unveiling Flavor Logo" />
            </div>
            <div>
                Search
            </div>
            <div>
                <p>favorites</p>
                <p>profile</p>
            </div>
        </div>
    )
}

export default MobileNav;