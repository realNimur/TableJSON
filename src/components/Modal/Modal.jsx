import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

function ModalContainer({ setOpen, item }) {
  const closeModal = () => {
    setOpen(false);
  };

  const handleEscClick = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscClick, false);
    document.querySelector('body').style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscClick, false);
      document.querySelector('body').style.overflow = 'auto';
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {Object.entries(item).map((item, index) => {
          const [key, value] = item;
          return (
            <p key={index}>
              {key} : {value}
            </p>
          );
        })}
        <button className={styles.modal__close} onClick={() => setOpen(false)}>
          X
        </button>
      </div>
    </div>,
    document.getElementById('app-modal')
  );
}

export function Modal({ open, setOpen, ...props }) {
  return <>{open ? <ModalContainer {...props} setOpen={setOpen} /> : null}</>;
}
