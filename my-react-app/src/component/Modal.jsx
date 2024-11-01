import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, className }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current) {
            if (open) {
                dialogRef.current.showModal(); // Line 14
            } else {
                dialogRef.current.close();
            }
        }

        return () => {
            if (dialogRef.current) {
                dialogRef.current.close();
            }
        };
    }, [open]);

    return createPortal(
        <dialog ref={dialogRef} className={`modal ${className}`}>
            {children}
        </dialog>,
        document.getElementById('modal')
    );
}
