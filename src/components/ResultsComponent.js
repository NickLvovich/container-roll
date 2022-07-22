import React from 'react';
import {
	ResultsBlock,
	ResultsTextWrapper,
	TypographyResultsAddition,
	TypographyResultsHeading,
} from '../Styles/ResultsStyles';

const ResultsComponent = () => {
	return (
		<ResultsBlock>
			<ResultsTextWrapper>
				<TypographyResultsHeading>12 000+</TypographyResultsHeading>
				<TypographyResultsAddition>
					containers bought/sold
				</TypographyResultsAddition>
			</ResultsTextWrapper>
			<ResultsTextWrapper>
				<TypographyResultsHeading>20</TypographyResultsHeading>
				<TypographyResultsAddition>
					years of experience
				</TypographyResultsAddition>
			</ResultsTextWrapper>
			<ResultsTextWrapper>
				<TypographyResultsHeading>900</TypographyResultsHeading>
				<TypographyResultsAddition>clients all along</TypographyResultsAddition>
			</ResultsTextWrapper>
		</ResultsBlock>
	);
};

export default ResultsComponent;
