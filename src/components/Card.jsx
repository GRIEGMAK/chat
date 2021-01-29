import React from 'react';
import DropDown from "./DropDown";


const Card = (props) => {
    const {task, open, completed, id, removeCard, onClickCheck, openSettings } = props
    return (
        <div>
            <div>
                {completed
                    ? ""
                    :"."
                }
                {task}
                <button onClick={()=>openSettings(id)}>></button>
                {!open
                    ?""
                    :<DropDown removeCard={removeCard} open={open} id={id} completed={completed} onClickCheck={onClickCheck}/>
                }
            </div>
        </div>
    )
};

export default Card;