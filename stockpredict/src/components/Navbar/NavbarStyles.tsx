import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Custom = {
    show?: boolean
  }

export const Nav = styled.nav`
	background: transparent;
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: fixed;
	top: 2%;
	z-index: 50;
	width: 100%;

	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: start;
	height: 80px;
	width:80%
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 100%;
	margin-top: 25px;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;
	

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.6rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul<Custom>`
	display: flex;
	gap:6.3em;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	margin-top: 25px;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #8ccab0;
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.span`
	color: #000;
	font-weight: bold;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	font-size: 1.6rem;


	&:hover {
		color: #c8c9d8;
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;

export const ProfileImg = styled.img`
	display:flex;
`;

export const ProfileButton = styled.button `
  background-image: linear-gradient(to right, #0377e2, #ad42c7);
  border: 0px solid;
  border-radius: 6px;
  margin: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 4px;
  flex-shrink: 0;
  width: 120px;
  justify-content: space-between;
  .HeaderButtonFont {
	color: #fff;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 400px;
	line-height: normal;
	width: 33px;
	height: 20px;
  }
  .HeaderLogo {
	width: 30px;
	height: 30px;
	flex-shrink: 0;
	border-radius: 15px;
  
	background: #d9d9d9;
  }
  
`;