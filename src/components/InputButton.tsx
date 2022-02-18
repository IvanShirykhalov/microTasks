import React, {ChangeEvent, useState} from "react";

type InputButtonType = {
    addMessage: (t: string) => void
}

export const InputButton = (props: InputButtonType) => {

    let [title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }


    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}