import styled, { createGlobalStyle } from 'styled-components';
import Select from '@mui/material/Select';
import LinkTranslated from "../LinkTranslated";
import MenuItem from '@mui/material/MenuItem';


export const NavigationTab = styled.nav`
	display: grid;
	padding: 24px;
	border-bottom: 1px solid #323b4e;
	grid-template-columns: 2.3fr 2fr 1fr;
	align-items: center;
  @media (min-width: 1024px) {
    grid-template-columns: 2.3fr 2fr 1fr;
  }
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
  && {
    width: 120px;
    background-color: inherit;
    display: flex;
    border: none;
    .MuiSelect-select {
      display: flex;
      justify-content: flex-end;
      padding-right: 20px !important;
    }
    .MuiList-root {
      background-color: #242C3A;
    }
    .MuiSelect-icon {
      color: white;
    }
    fieldset {
      border: none;
    }
  }
`;

export const MenuItemStyled = styled(MenuItem)`
  && {  
    display: flex;
    span {
      color: #FFFFFF;
    }
`;

export const DropdownMenuStyles = createGlobalStyle`
  .custom-dropdown-menu {
    .MuiList-root {
      background-color: #242C3A;
    }
  }
`;


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

export const HeadingLink = styled(LinkTranslated)`
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
