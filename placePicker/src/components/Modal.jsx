import {useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, isOpen, onCancel }) {
  const dialog = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const modal = dialog.current
    modal.showModal()
    return () => {
      modal.close()
    }
  },[isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog} onCancel={onCancel}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
