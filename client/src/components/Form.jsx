import React from "react";

const Form = (props) => {
    const { addNewCard, newElement, setBtnAdd, btnAdd, refactorMessage } = props
    const refactor = () =>{
        refactorMessage(newElement)
        setBtnAdd(false)
    }
    return (
        <div><input type="text" placeholder="Введите сообщение..." ref={newElement}/>
            {!btnAdd
                ?<button onClick={()=>addNewCard(newElement)}>Добавить</button>
                :<button onClick={()=>refactor()}>Редактировать</button>
            }
        </div>
    )
}

export default Form;