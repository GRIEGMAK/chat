import React from "react";
import {makeAutoObservable} from "mobx";

class Store {
    card = [];
    index = 0;
    recording=0
    oldMessage=[]
    newMessage=[]
    allNewMessage=[]
    constructor() {
        makeAutoObservable(this)
    }
    readNewMessages= () => {
        this.allNewMessage.push(
            ...this.newMessage
        )
    }
    readMessage = () => {
        this.card.clear()
        this.card.push(
            ...this.oldMessage,
            ...this.allNewMessage
        )
    }
    setMessage = async () => {
        let api_url = await fetch(`/initialStorage/wordCommunication.json`);
        this.oldMessage = await api_url.json()
        this.card.push(
            ...this.oldMessage
        )
    }
    choiceInd = () => {
        this.index = this.index + 1
        this.card.map(el => el.id === this.index ? this.recording=this.index : "")
        if(this.recording === this.index)
        {
            this.choiceInd()
        }
    }
    addNewCard = (newElement) => {
        if(newElement.current.value !== ""){
            this.choiceInd()
            this.newMessage.push({
                Author: "Admin",
                id: this.index,
                message: newElement.current.value,
                completed: false,
            })
            this.readNewMessages()
            this.readMessage()
            this.newMessage.clear()
            newElement.current.value = ''
        }
    }
/*    copyMessage = ( newElement)=>{
        newElement.current.value = this.card.
    }
    refactorMessage = (id)=> {
        this.card.map =
    }*/
    removeCard = (id) => {
        this.oldMessage = this.oldMessage.filter(el => el.id !== id)
        this.allNewMessage = this.allNewMessage.filter(el => el.id !== id)
        this.readMessage()

    }
    onClickCheck = (id) => {
        this.oldMessage = this.oldMessage.map(el => el.id === id ? {...el, completed: !el.completed} : el)
        this.allNewMessage = this.allNewMessage.map(el => el.id === id ? {...el, completed: !el.completed} : el)
        this.readMessage()
    }
}

export default new Store();