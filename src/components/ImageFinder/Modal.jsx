import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent, Overlay } from './Image.module';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const hendelKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', hendelKeyDown);

    return () => {
      window.removeEventListener('keydown', hendelKeyDown);
    };
  });

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    modalRoot
  );
}
