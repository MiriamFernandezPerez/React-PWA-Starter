import { createGlobalStyle } from 'styled-components';
 

export const GlobalStyle = createGlobalStyle`
	body {
        background-image: url(${props => (props.img)});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
	}
`;
