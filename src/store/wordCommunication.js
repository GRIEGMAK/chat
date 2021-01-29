import React from "react";
import {makeAutoObservable} from "mobx";

class wordCommunication {
    card = [];
    index = 0;
    constructor() {
        makeAutoObservable(this)
    }
    addNewCard = (newElement) => {
        if(newElement.current.value !== "") {
            this.card.push({
                id: this.index + 1,
                task: newElement.current.value,
                completed: false,
                open:false
            })
            this.index = this.index + 1
        }
        newElement.current.value = ''
    }
    removeCard = (id) => {
        this.card = this.card.filter(el => el.id !== id)
    }
    onClickCheck = (id) => {
        this.card = this.card.map(el => el.id === id ? {...el, completed: !el.completed} : el)
    }
    openSettings = (id) => {
        this.card = this.card.map(el => el.id === id ? {...el, open: !el.open} : el)
    }
}

export default new wordCommunication();