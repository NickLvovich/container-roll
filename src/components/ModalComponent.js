import React, { forwardRef } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSpring, animated } from 'react-spring';
import NavigationComponent from './NavigationComponent';
import ContactComponent from './ContactComponent';
import { Link } from 'gatsby';
import {
	ContactWrapper,
	ModalLink,
	ModalList,
} from '../Styles/ModalComponentStyles';

const Fade = forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

const style = {
	position: 'absolute',
	display: 'flex',
	flexFlow: 'column',
	justifyContent: 'space-between',
	top: '50%',
	left: '50%',
	width: '100%',
	height: '100%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	backgroundColor: '#141B2A',
};

const SpringModal = ({ open, handleOpen }) => {
	return (
		<div>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				open={open}
				onClose={handleOpen}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<NavigationComponent handleOpen={handleOpen} isCloseButton />
						<nav>
							<ul>
								<ModalList>
									<ModalLink to="/selling/" activeClassName="active">
										Selling/buying containers
									</ModalLink>
								</ModalList>
								<ModalList
									style={{
										marginTop: 20,
									}}
								>
									<ModalLink to="/leasing/" activeClassName="active">
										Container leasing
									</ModalLink>
								</ModalList>
							</ul>
						</nav>
						<ContactWrapper>
							<ContactComponent />
						</ContactWrapper>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default SpringModal;
