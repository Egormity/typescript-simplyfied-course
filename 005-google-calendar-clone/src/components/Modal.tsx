import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cc } from '../utils/cc';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const prevIsOpen = useRef<boolean>();

  useEffect(() => {
    function handleClick(e: KeyboardEvent) {
      if (e.key.toLocaleLowerCase() === 'escape') onClose();
    }
    document.addEventListener('keydown', handleClick);
    return () => document.removeEventListener('keydown', handleClick);
  }, [onClose]);

  useLayoutEffect(() => {
    if (!isOpen && prevIsOpen.current) setIsClosing(true);
    prevIsOpen.current = isOpen;
  }, [isOpen]);

  if (!isOpen && !isClosing) return;
  return createPortal(
    <div onAnimationEnd={() => setIsClosing(false)} className={cc('modal', isClosing && 'closing')}>
      <div className='overlay' onClick={onClose} />
      <div className='modal-body'>{children}</div>
    </div>,
    document.querySelector('#modal-container') as HTMLElement
  );
}
