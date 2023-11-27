import './Header.css'
import { MainHeader, MainHeaderLogo } from './HeaderStyles'
import logo from "../../Images/Logo/SVG Vector Files/Transparent Logo.svg"

const Header = () => (
  <MainHeader>
    <MainHeaderLogo
      className="MainHeaderLogo"
      src={logo}
      alt="Logo"
    />

    <p className="LeftHeader">About</p>
    <p className="LeftHeader">Portfolio</p>
    <p className="LeftHeader">Contact</p>

    <button type="button" className="button">
      <p className="HeaderButtonFont">Ann</p>
      <img
        className="HeaderLogo"
        src="https://i.ibb.co/SsM4vWc/Screenshot-2023-09-20-174051.png"
        alt="Sidd"
      />
    </button>
  </MainHeader>
)

export default Header