import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const StyledJoinModal = styled(Modal)`
  .header-img {
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  section {
    color: var(--text-inverse);
    padding: 1.75em;
    h2 {
      font-size: 1.2rem;
      font-weight: normal;
    }
    button {
      width: 100%;
      font: inherit;
      font-weight: bold;
      padding: 0.5em 1.5em;
      background: var(--cl-primary);
      color: var(--text-primary);
      border: none;
      border-radius: var(--border-radius);
    }
  }
`;

type JoinModalProps = {
  show: boolean;
  closeModal: () => void;
};

const JoinModal = ({ show, closeModal }: JoinModalProps) => {
  return (
    <StyledJoinModal show={show} closeModal={closeModal}>
      <header className="header-img">
        <img src={`https://placem.at/place?w=800`} alt="a model" />
      </header>
      <section>
        <h2>Join over 300,000 people who use iSleepMusic.</h2>
        <ul>
          <li>Set timer to fade music out while you sleep.</li>
          <li>Change equalizer and filter settings. </li>
          <li>Custom playlist to save your favorite music.</li>
        </ul>
        <button>JOIN iSleepMusic</button>
      </section>
    </StyledJoinModal>
  );
};

export default JoinModal;
