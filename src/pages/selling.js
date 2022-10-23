import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import '../index.css';
import QuestionSection from '../sections/QuestionSection';
import StartedFormSection from '../sections/StartedFormSection';
import ContactSection from '../sections/ContactSection';
import SpringModal from '../components/ModalComponent';
import HeaderSellingSection from '../sections/HeaderSellingSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import CarouselSection from '../sections/CarouselSection';
import SwiperGallerySection from '../sections/SwiperGallerySection';
import SimpleLocalize from '../SimpleLocalize';

const Container = styled.div`
	margin: 0;
	padding: 0;
`;

const IndexPage = (props) => {
	const [open, setOpen] = useState(false);
	const handleOpen = useCallback(() => {
		console.log(open, 'open');
		setOpen(!open);
	}, [open]);

	return (
		<SimpleLocalize {...props}>
			<Container>
				<HeaderSellingSection
					screenType="selling"
					setOpen={setOpen}
					open={open}
					handleOpen={handleOpen}
				/>
				<HowItWorksSection />
				<CarouselSection />
				<QuestionSection />
				<SwiperGallerySection first reverseDirection={true} />
				<SwiperGallerySection reverseDirection={false} />
				<StartedFormSection />
				<ContactSection />
				<SpringModal setOpen={setOpen} open={open} handleOpen={handleOpen} />
			</Container>
		</SimpleLocalize>
	);
};

export default IndexPage;
