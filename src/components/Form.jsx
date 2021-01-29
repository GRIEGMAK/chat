import React from "react";

const Form = (props) => {
    let newElement=React.createRef()
    const { addNewCard } = props
    return (
        <div><input type="text" placeholder="Введите сообщение..." ref={newElement}/>
            <button onClick={()=>addNewCard(newElement)}>Добавить
            </button>
        </div>
    )
}

export default Form;