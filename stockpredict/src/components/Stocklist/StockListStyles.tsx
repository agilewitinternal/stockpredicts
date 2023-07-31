import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const StocklistContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;

	${Container}
`;

export const StockListTable = styled.div`
    height: 100vh;
    background-position: center;
    background-size: cover;
    padding-top: clamp(70px, 10vh, 220px);
    padding-left: 10px;

	// @media screen and (max-width: 960px) {
	// 	display: block;
	// 	position: absolute;
	// 	top: 0;
	// 	right: 0;
	// 	transform: translate(-100%, 60%);
	// 	font-size: 1.8rem;
	// 	cursor: pointer;
	// }
`;