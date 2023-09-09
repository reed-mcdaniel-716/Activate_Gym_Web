// specify size and style of icon in import
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/activate-gym-high-resolution-logo-color-on-transparent-background.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage)  => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  // css classes for reuse
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="activate gym logo" src={Logo} className="scale_image"/>
            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;