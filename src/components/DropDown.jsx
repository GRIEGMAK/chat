import React from 'react';
import {observer} from "mobx-react";
import Popup from "./Popup";

const DropDown = (props) => {
    const { id, removeCard, completed, onClickCheck, active, setActive } = props
    return (
            <div>
                <Popup active={active} setActive={setActive}>
                <button onClick={() => removeCard(id)}>Удалить</button>
                {completed
                    ? <button onClick={()=>onClickCheck(id)}>Отметить непрочитаным</button>
                    : <button onClick={()=>onClickCheck(id)}>Отметить как прочитано</button>
                }
                </Popup>
            </div>
    )
};

export default observer(DropDown);
