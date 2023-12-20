import { useEffect } from 'react';
import { Backdrop } from './Modal.styled';

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

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return <Backdrop onClick={onBackdropClick}>{children}</Backdrop>;
};
