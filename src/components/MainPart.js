import React from 'react';
import Form from "./Form";
import {observer} from "mobx-react";
import Card from "./Card";

const MainPart = (props) => {
    const { store } = props
    const { addNewCard, card, onClickCheck, removeCard } = store
    let getCardArray = undefined
    if (card) {
        getCardArray = card.map((c, i) => <Card key={i} {...c} removeCard={removeCard}
                                                     onClickCheck={onClickCheck} />)
    }
    return (
        <div>
            {getCardArray}
            <Form addNewCard={addNewCard}/>
        </div>
    )
};

export default observer(MainPart);