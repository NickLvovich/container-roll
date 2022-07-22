import styled from 'styled-components';
import { Link } from 'gatsby';

export const ContactWrapper = styled.div`
	display: flex;
	flex-grow: 2;
	flex-direction: column-reverse;
	padding: 20px;
`;

export const ModalLink = styled(Link)`
	position: relative;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: #ffffff;
	text-decoration: none;
	&.${(props) => props.activeClassName} {
		font-weight: 700;
		margin-left: 30px;
		::before {
			content: '___';
			color: #3f65ea;
			position: absolute;
			left: -30px;
			bottom: 5px;
		}
	}
`;

export const ModalList = styled.li`
	list-style-type: none;
`;
