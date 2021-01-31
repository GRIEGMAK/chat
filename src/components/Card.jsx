import React from 'react';
import DropDown from "./DropDown";


const Card = (props) => {
    const [active, setActive] = React.useState()
    const {Author, message, completed, id, removeCard, onClickCheck } = props
    return (
        <div>
            <div>
                {id}
                {Author}: {message}
                <a onClick={()=>setActive(!active)}>↓</a>
                {completed
                    ? ""
                    :"."
                }
                {!active
                    ?""
                    :<DropDown removeCard={removeCard}  id={id} completed={completed} onClickCheck={onClickCheck} active={active} setActive={setActive}/>
                }
            </div>
        </div>
    )
};

export default Card;