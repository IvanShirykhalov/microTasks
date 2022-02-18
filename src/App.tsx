import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {InputButton} from "./components/InputButton";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('')

    const addMessage = (t: string) => {
        setMessage([{message: t}, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <InputButton addMessage={addMessage}/>
            <Input setTitle={setTitle} title={title}/>
            <Button callBack={callBackButtonHandler} name={'+'}/>
            <div>
                {message.map((el, i) => {
                    return (
                        <div key={i}>{el.message}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
