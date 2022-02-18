import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    /*    const myFirstSubscriber = (e: MouseEvent<HTMLButtonElement>) => {
            alert('Hello, i\'m Vasya! ')
        }

        const mySecondSubscriber = (e: MouseEvent<HTMLButtonElement>) => {
            alert('Hello, i\'m Ivan')
        }*/

    const OnClickHandler = (name: string, age?: number) => {
        if (age) {
            alert(`Hello i'm ${name}, i'm ${age}`)
        } else {
            alert(`Hello, i'm ${name}`)
        }
    }

    /*    const foo1 = () => {
            alert(100200)
        }
        const foo2 = (number: number) => {
            alert(number)
        }*/

    return (
        <div>
            {/*<button onClick={() => {alert('Hi')}}>MyYouTubeChanel-1</button>*/}
            {/*            <button onClick={(e) => OnClickHandler('Vasili')}>MyYouTubeChanel-1</button>
            <button onClick={(e) => OnClickHandler('Ivan')}>MyYouTubeChanel-2</button>*/}
            <Button callBack={() => OnClickHandler('Ivan', 20)} name={'MyYouTubeChanel-1'}/>
            <Button callBack={() => OnClickHandler('Vasili', 45)} name={'MyYouTubeChanel-2'}/>
            <Button callBack={() => OnClickHandler('Stupid Button')} name={'StupidButton'}/>

            {/*            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>*/}
        </div>
    );
}

export default App;
