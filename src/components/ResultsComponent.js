import React from 'react';
import {
	ResultsBlock,
	ResultsTextWrapper,
	TypographyResultsAddition,
	TypographyResultsHeading,
} from '../Styles/ResultsStyles';
import { FormattedMessage } from 'react-intl';

const ResultsComponent = () => {
	return (
		<ResultsBlock>
			<ResultsTextWrapper>
				<TypographyResultsHeading>12 000+</TypographyResultsHeading>
				<TypographyResultsAddition>
					<FormattedMessage id={`bought-sold`} />
				</TypographyResultsAddition>
			</ResultsTextWrapper>
			<ResultsTextWrapper>
				<TypographyResultsHeading>20</TypographyResultsHeading>
				<TypographyResultsAddition>
					<FormattedMessage id={`experience`} />
				</TypographyResultsAddition>
			</ResultsTextWrapper>
			<ResultsTextWrapper>
				<TypographyResultsHeading>900</TypographyResultsHeading>
				<TypographyResultsAddition>
					<FormattedMessage id={`clients`} />
				</TypographyResultsAddition>
			</ResultsTextWrapper>
		</ResultsBlock>
	);
};

export default ResultsComponent;
