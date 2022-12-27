import React from "react";
import "./MyModal.css";

const MyModal = ({ showModal, component }) => {
	return (
		<div className='myModalContainer' onClick={() => showModal(false)}>
			<div className='myModalContent' onClick={(e) => e.stopPropagation()}>
				{component}
			</div>
		</div>
	);
};

export default MyModal;
