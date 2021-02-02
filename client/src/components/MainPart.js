import React from 'react';
import Form from "./Form";
import {observer} from "mobx-react";
import Card from "./Card";

const MainPart = (props) => {
    let newElement=React.createRef()
    const [btnAdd, setBtnAdd] = React.useState(false)
    const { store } = props
    const { addNewCard, card, onClickCheck, removeCard, copyMessage, refactorMessage } = store
    let getCardArray = undefined
    if (card) {
        getCardArray = card.map((c, i) => <Card key={i} {...c}
                                                removeCard={removeCard}
                                                onClickCheck={onClickCheck}
                                                copyMessage={copyMessage}
                                                newElement={newElement}
                                                setBtnAdd={setBtnAdd}/>)
    }
    return (
        <div>
            {getCardArray}
            <Form addNewCard={addNewCard}
                  newElement={newElement}
                  btnAdd={btnAdd}
                  setBtnAdd={setBtnAdd}
                  refactorMessage={refactorMessage}/>
        </div>
    )
};

export default observer(MainPart);