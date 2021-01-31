import React from 'react';
import s from "./../styles/Popup.module.sass"

const Popup = ({active, setActive, children}) => {
    return (
        <div className={active ? s.modal.active : s.modal} onClick={() => setActive(false)}>
            <div className={active ? s.modal_content.active : s.modal_content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default Popup;