import { createContext, useContext, useState, useCallback } from 'react';

import Modal from '../components/modal/Modal';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
