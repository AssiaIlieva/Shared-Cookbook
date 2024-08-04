import { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';
import styles from './Modal.module.css';

export default function Modal() {
  const { modalContent, closeModal } = useContext(ModalContext);

  if (!modalContent) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>
          ×
        </button>
        {modalContent}
      </div>
    </div>
  );
}
