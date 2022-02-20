import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {InputButton} from "./components/InputButton";
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {Money} from "./components/Money";
import {NewComponent} from "./components/NewComponent";

export type FilterType = 'all' | 'dollar' | 'ruble'

function App() {

    /*    let [message, setMessage] = useState([
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
        );*/
    /*
        return(
            <>
                <Header headerTitle={'Header'}/>
                <Body bodyTitle={'Body'}/>
                <Footer footerTitle={'Footer'}/>
            </>
        )*/
    /*    const [money, setMoney] = useState([
            {banknote: 'dollar', nominal: 100, number: '1'},
            {banknote: 'dollar', nominal: 50, number: '2'},
            {banknote: 'ruble', nominal: 100, number: '3'},
            {banknote: 'dollar', nominal: 100, number: '4'},
            {banknote: 'dollar', nominal: 50, number: '5'},
            {banknote: 'ruble', nominal: 100, number: '6'},
            {banknote: 'dollar', nominal: 50, number: '7'},
            {banknote: 'ruble', nominal: 50, number: '8'},
        ])

        const [filter, setFilter] = useState<FilterType>('all')
        let currentMoney = money

        if (filter === 'dollar') {
            currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar')
        }
        if (filter === 'ruble') {
            currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble')
        }

        const onClickHandler = (banknote: FilterType) => {
            setFilter(banknote)
        }


        return (
            <Money currentMoney={currentMoney} onClickHandler={onClickHandler}/>

        )*/
    /*    const students = [
            {id:1, name: 'James', age: 10},
            {id:2, name: 'Tom', age: 15},
            {id:3, name: 'Evan', age: 40},
            {id:4, name: 'Sam', age: 23},
            {id:5, name: 'Freddy', age: 26},
            {id:6, name: 'Olivia', age: 14},
            {id:7, name: 'Vanessa', age: 83},
            {id:8, name: 'Johnny', age: 93},
            {id:9, name: 'Dick', age: 27},
            {id:10, name: 'Bobby', age: 58},
            {id:11, name: 'Alex', age: 68},
        ]

        return (
            <NewComponent students={students}/>
        )*/

    const [a, setA] = useState(1)

    const onCLickHandler = () => setA(a+1)
    const onCLickHandlerZero = () => setA(0)

    return(
        <div>
            <h1>{a}</h1>
            <button onClick={onCLickHandler}>+</button>
            <button onClick={onCLickHandlerZero}>0</button>
        </div>
    )
}

export default App;
