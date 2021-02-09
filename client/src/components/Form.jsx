import React from "react";

const Form = (props) => {
    const [emoji, setEmoji] = React.useState(false)
    const { addNewCard, newElement, setBtnAdd, btnAdd, refactorMessage } = props
    const refactor = () =>{
        refactorMessage(newElement)
        setBtnAdd(false)
    }
    const emojiSet = () =>{
        if(emoji)
        {
            return(
                <div>
                    <input type="text">&#129321;</input>
                    <input type="text">&#129315;</input>
                </div>
            )
        }
    }

    return (
        <div>
            <input type="text" placeholder="Введите сообщение..." ref={newElement}/>
            <button onClick={() => {setEmoji(true)}}>&#9786;</button>
            {emojiSet()}
            {!btnAdd
                ?<button onClick={()=>addNewCard(newElement)}>Добавить</button>
                :<button onClick={()=>refactor()}>Редактировать</button>
            }
        </div>
    )
};

export default Form;