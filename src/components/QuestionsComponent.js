import React from 'react';
import { TypographyMainText } from '../Styles/TrustedCompaniesSectionStyles';
import {
	QuestionWrapper,
	TypographyQuestion,
} from '../Styles/QuestionsComponentStyles';

const QuestionsComponent = ({ questions }) => {
	return questions.map((faq) => {
		return (
			<QuestionWrapper>
				<TypographyQuestion>{faq.question}</TypographyQuestion>
				<TypographyMainText>{faq.answer}</TypographyMainText>
			</QuestionWrapper>
		);
	});
};

export default QuestionsComponent;
