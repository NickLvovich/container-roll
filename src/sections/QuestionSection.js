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


const QuestionSection = () => {
	return (
		<TrustedContainer>
			<TypographyHeadingQuestionWrapper>
				<TypographyHeading>Frequently asked questions</TypographyHeading>
				<TypographyQuestionsMainText>
					Can’t find the answer you’re looking for? Reach out to our customer
					support team.
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
