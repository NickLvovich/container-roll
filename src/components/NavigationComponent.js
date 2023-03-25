import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '@mui/material/Button';
import {
	BurgerWrapper,
	HeadingLink,
	ListElement,
	ListWrapper,
	NavigationTab, NavTranslate, TypographyTranslate,
} from '../Styles/NavigationComponentStyles';
import CloseBtn from '../images/close.svg';
import { FormattedMessage } from 'react-intl';
import BasicLanguageSelect from "./SelectLanguage";


const NavigationComponent = ({ handleOpen, isCloseButton }) => {

	return (
		<NavigationTab>
			<ListWrapper>
				<ListElement>
					<HeadingLink href="/selling/" activeClassName="active">
						<FormattedMessage id="selling-buying-containers" />
					</HeadingLink>
				</ListElement>
				<ListElement>
					<HeadingLink href="/leasing/" activeClassName="active">
						<FormattedMessage id="leasing-containers" />
					</HeadingLink>
				</ListElement>
			</ListWrapper>
			<HeadingLink to="/">
				<StaticImage
					layout="fixed"
					width={150}
					height={21.55}
					src="../images/Logo.png"
					alt="СontaineRRoll"
				/>
			</HeadingLink>
			{/*<NavTranslate>*/}
			{/*	<StaticImage*/}
			{/*		style={{ marginRight: 10 }}*/}
			{/*		layout="fixed"*/}
			{/*		width={22}*/}
			{/*		height={22}*/}
			{/*		src="../images/eng.png"*/}
			{/*		alt="translate-en"*/}
			{/*	/>*/}
			{/*	<TypographyTranslate>*/}
			{/*		EN*/}
			{/*		<StaticImage*/}
			{/*			layout="fixed"*/}
			{/*			width={15}*/}
			{/*			height={10}*/}
			{/*			src="../images/Arrow.png"*/}
			{/*			alt="arrow-down"*/}
			{/*		/>*/}
			{/*	</TypographyTranslate>*/}
			{/*</NavTranslate>*/}
			<BasicLanguageSelect />
			{!isCloseButton ? (
				<BurgerWrapper>
					<Button onClick={handleOpen}>
						<StaticImage
							layout="fixed"
							width={34}
							height={34}
							src="../images/Burger.png"
							alt="menu"
						/>
					</Button>
				</BurgerWrapper>
			) : (
				<Button onClick={handleOpen}>
					<BurgerWrapper>
						<img width={34} height={34} src={CloseBtn} alt="close" />
					</BurgerWrapper>
				</Button>
			)}
		</NavigationTab>
	);
};

export default NavigationComponent;
