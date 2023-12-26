import { useEffect } from 'react';
import { Backdrop } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const onKeydown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onClose]);

  useEffect(() => {
    const wasOverflowHidden = document.body.classList.contains('noOverflow');
    document.body.classList.add('noOverflow');

    return () => {
      if (!wasOverflowHidden) {
        document.body.classList.remove('noOverflow');
      }
    };
  }, []);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>{children}</Backdrop>,
    modalRoot
  );
};
