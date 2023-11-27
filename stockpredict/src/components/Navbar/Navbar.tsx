import React, { useState } from 'react';
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	ProfileImg,
	ProfileButton
} from './NavbarStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from '../../data/NavbarData';
import logo from "../../Images/Logo/SVG Vector Files/Transparent Logo.svg"

const Navbar = () => {
	const [show, setShow]: any = useState(false);

	let navigate = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id: any) => {
		const element: any = document.getElementById(id);

		element.current?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to: any, id: any) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src={logo} alt="StockPredicts_logo" />
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes style = {{color:"rgb(169 114 114)"}} /> :
							<svg>
							<path d="M7 10H21" stroke="#0377E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M3 6H21" stroke="#0377E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M3 14H21" stroke="#0377E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M7 18H21" stroke="#0377E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg> }
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el: any, index: any) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
						<ProfileButton type="button">
							{/* <p className="HeaderButtonFont">Ann</p>
						<img
							className="HeaderLogo"
							src="https://i.ibb.co/SsM4vWc/Screenshot-2023-09-20-174051.png"
							alt="Sidd"
						/> */}
							<NavLinks className="HeaderButtonFont">Profile
								<a href='#'>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_138_127)">
											<path d="M12 15L7.75696 10.757L9.17196 9.34302L12 12.172L14.828 9.34302L16.243 10.757L12 15Z" fill="white" />
										</g>
										<defs>
											<clipPath id="clip0_138_127">
												<rect width="24" height="24" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</a>
								<ProfileImg src={logo} className="HeaderLogo" alt="StockPredicts_logo" />
							</NavLinks >
						</ProfileButton>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;