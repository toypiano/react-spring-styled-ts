import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Backdrop from './Backdrop';
import { FiXCircle } from 'react-icons/fi';

const StyledModal = styled(animated.div)`
  position: fixed;
  z-index: var(--z-modal);
  top: 18vh;
  left: 50%;
  background: white;
  width: 24rem;
  /* max-width 100% plays nicer with smaller viewport */
  max-width: 100%;
  border-radius: var(--border-radius);
  .modal__close-button {
    position: absolute;
    background: transparent;
    border: none;
    font-size: 2rem;
    color: var(--text-secondary);
    /* half the font-size makes close button overlap at 50% of its width */
    right: -1rem;
    top: -1rem;
  }
`;

type ModalProps = {
  children: ReactNode;
  show: boolean;
  closeModal: () => void;
  className?: string;
};

const Modal = ({ children, show, closeModal, className }: ModalProps) => {
  const transition = useTransition(show, null, {
    from: {
      opacity: 0,
      transform: `translate3d(-50%, -100%, 0)`,
    },
    enter: {
      opacity: 1,
      transform: `translate3d(-50%, 0%, 0)`,
    },
    leave: {
      opacity: 0,
      transform: `translate3d(-50%, -100%, 0)`,
    },
  });
  return (
    <>
      <Backdrop show={show} onClick={closeModal} />
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <StyledModal className={className} key={key} style={props}>
              <button className="modal__close-button" onClick={closeModal}>
                <FiXCircle />
              </button>
              {children}
            </StyledModal>
          )
      )}
    </>
  );
};

export default Modal;
