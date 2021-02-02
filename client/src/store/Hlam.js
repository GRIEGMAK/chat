import {makeAutoObservable} from "mobx";

class Store {
    card = [];
    index = 0;
    recording=0
    oldMessage=[]
    newMessage=[]
    allNewMessage=[]
    refactorId=0
    CopyMess = undefined
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
        this.card.map(el => el.id === this.index ? this.recording=this.index : el)
        if(this.recording === this.index)
        {
            this.choiceInd()
        }
        else {
            this.recording =0;
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
    prepRefactor = (el, newElement) => {
        Reflect.set(el, "message", newElement.current.value)
    }
    copyMessage = (id, newElement)=>{
        this.refactorId=id
        this.oldMessage.map(el => el.id === id ? this.CopyMess=el.message : el)
        if(!this.CopyMess){
            this.allNewMessage.map(el => el.id === id ? this.CopyMess=el.message : el)
        }
        newElement.current.value = this.CopyMess
        this.CopyMess=undefined
    }
    refactorMessage = (newElement)=> {
        let id = this.refactorId
        if(newElement.current.value !== "") {
            this.oldMessage.map(el => el.id === id ? this.prepRefactor(el, newElement) : el)
            this.allNewMessage.map(el => el.id === id ? this.prepRefactor(el, newElement) : el)
            console.log(this.oldMessage)
            this.readMessage()
            newElement.current.value = ''
        }
    }
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