import React from 'react';

const Modal = (props) => {
  const { closeModal } = props;

  return (
    <div className="modal-overlay">
        <div className='close-modal-button'
          onClick={closeModal}
        >
          <p> &#x2715;</p >  
        </div>
        {props.children}
        
   
      </div>
      
  );
};

export default Modal;
