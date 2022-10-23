import React from 'react';
import {
	TrustedContainer,
	TypographyHeading,
	TypographyQuestionsMainText,
} from '../Styles/TrustedCompaniesSectionStyles';
import QuestionsComponent from '../components/QuestionsComponent';
import { questions } from '../constants/Constants';
import ResultsComponent from '../components/ResultsComponent';
import {
	QuestionsComponentWrapper,
	TypographyHeadingQuestionWrapper,
} from '../Styles/QuestionsComponentStyles';
import { FormattedMessage } from 'react-intl';

const QuestionSection = () => {
	return (
		<TrustedContainer>
			<TypographyHeadingQuestionWrapper>
				<TypographyHeading>
					<FormattedMessage id="frequently-asked-questions" />
				</TypographyHeading>
				<TypographyQuestionsMainText>
					<FormattedMessage id="customer-questions" />
				</TypographyQuestionsMainText>
			</TypographyHeadingQuestionWrapper>
			<QuestionsComponentWrapper>
				<QuestionsComponent questions={questions} />
			</QuestionsComponentWrapper>
			<ResultsComponent />
		</TrustedContainer>
	);
};

export default QuestionSection;
