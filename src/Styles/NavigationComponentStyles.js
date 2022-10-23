import styled from 'styled-components';
import { Link } from 'gatsby';
import Select from '@mui/material/Select';


export const NavigationTab = styled.nav`
	display: grid;
	padding: 24px;
	border-bottom: 1px solid #323b4e;
	grid-template-columns: 2.3fr 2fr 1fr;
	align-items: center;
`;
export const NavTranslate = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const TypographyTranslate = styled.span`
	display: flex;
	color: #ffffff;
	align-items: center;
	min-width: 40px;
	font-size: 16px;
`;

export const SelectOptions = styled(Select)`
  .MuiList-root{
    display: block;
  }
`


export const BurgerWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	@media (min-width: 1024px) {
		display: none;
	}
`;

export const ListWrapper = styled.ul`
	display: none;
	@media (min-width: 1024px) {
		display: flex;
	}
`;

export const ListElement = styled.li`
	list-style-type: none;
`;

export const HeadingLink = styled(Link)`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  text-decoration: none;
  margin-left: 15px;
  &.${(props) => props.activeClassName} {
    font-weight: 700;
    ::before {
      width: 100%;
      content: ' ';
      color: #3F65EA;
      position: absolute;
      left: 0;
      top: 60px;
      border-bottom: 1px solid #ffff;
    }
`;
