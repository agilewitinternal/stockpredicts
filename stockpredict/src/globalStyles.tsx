import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;

	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }: any) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Heading = styled.h2`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin } : any) => (margin ? margin : '')};
	margin-bottom: ${({ mb } : any) => (mb ? mb : '')};
	margin-top: ${({ mt } : any) => (mt ? mt : '')};
	color: ${({ inverse } : any) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width } : any) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span`
	color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size } : any) => (size ? size : '')};
	font-weight: ${({ weight } : any) => (weight ? weight : '')};
	letter-spacing: ${({ spacing } : any) => (spacing ? spacing : '')};
	padding: ${({ padding } : any) => (padding ? padding : '')};
	margin: ${({ margin } : any) => (margin ? margin : '')};
	margin-bottom: ${({ mb } : any) => (mb ? mb : '')};
	margin-top: ${({ mt } : any) => (mt ? mt : '')};
`;
export const Section = styled.section`
	padding: ${({ padding }: any) => (padding ? padding : '140px 0')};
	margin: ${({ margin }: any) => (margin ? margin : '')};
	background: ${({ inverse }: any) => (inverse ? 'white' : '#071c2f')};
	position: ${({ position } : any) => (position ? position : '')};
	width: ${({ width } : any) => (width ? width : 'auto')};
	min-width: ${({ minWidth } : any) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth } : any) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height } : any) => (height ? height : 'auto')};
	max-height: ${({ maxHeight } : any) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight } : any) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding } : any) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }: any) => (justify ? justify : '')};
	align-items: ${({ align } : any) => (align ? align : '')};
	gap: ${({ gap } : any) => (gap ? gap : '')};
	padding: ${({ padding } : any) => (padding ? padding : '')};
	margin: ${({ margin } : any) => (margin ? margin : '')};
	position: ${({ position } : any) => (position ? position : '')};
	width: ${({ width } : any) => (width ? width : 'auto')};
	min-width: ${({ minWidth } : any) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth } : any) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height } : any) => (height ? height : 'auto')};
	max-height: ${({ maxHeight } : any) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight } : any) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap } : any) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }: any) => (justify ? justify : '')};
	align-items: ${({ align }: any) => (align ? align : '')};
	gap: ${({ gap }: any) => (gap ? gap : '')};
	padding: ${({ padding }: any) => (padding ? padding : '')};
	margin: ${({ margin }: any) => (margin ? margin : '')};
	position: ${({ position }: any) => (position ? position : '')};
	width: ${({ width }: any) => (width ? width : 'auto')};
	min-width: ${({ minWidth }: any) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }: any) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }: any) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }: any) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }: any) => (minHeight ? minHeight : 'auto')};
`;

export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;

	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: black;
	}
`;

export default GlobalStyle;