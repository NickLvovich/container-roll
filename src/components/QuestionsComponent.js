import React from 'react';
import { TypographyMainText } from '../Styles/TrustedCompaniesSectionStyles';
import {
	QuestionWrapper,
	TypographyQuestion,
} from '../Styles/QuestionsComponentStyles';
import { FormattedMessage } from 'react-intl';

const QuestionsComponent = ({ questions }) => {
	return questions.map((faq) => {
		return (
			<QuestionWrapper>
				<TypographyQuestion>
					<FormattedMessage id={`${faq.question}`} />
				</TypographyQuestion>
				<TypographyMainText>
					<FormattedMessage id={`${faq.answer}`} />
				</TypographyMainText>
			</QuestionWrapper>
		);
	});
};

export default QuestionsComponent;
