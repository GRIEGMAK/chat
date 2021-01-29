import React from 'react';
import {observer} from "mobx-react";

const DropDown = (props) => {
    const { id, removeCard, completed, onClickCheck } = props
    return (
            <div>
                <button onClick={() => removeCard(id)}>Удалить</button>
                {completed
                    ? <button onClick={()=>onClickCheck(id)}>Отметить непрочитаным</button>
                    : <button onClick={()=>onClickCheck(id)}>Отметить как прочитано</button>
                }
            </div>
    )
};

export default observer(DropDown);
