import React from "react";
import './model.css';

export const Model = ({ active, setActive, children }: any) => {


    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modalContent active' : 'modalContent'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}




