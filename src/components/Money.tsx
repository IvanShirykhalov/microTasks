import React from 'react';
import {FilterType} from "../App";

type MoneyPropsType = {
    onClickHandler: (banknote: FilterType) => void
    currentMoney: Array<{
        banknote: string
        nominal: number
        number: string
    }>
}


export const Money = (props: MoneyPropsType) => {

    const callBack = (banknote: FilterType) => {
      props.onClickHandler(banknote)
    }

    return (
        <>
            <ul>
                {props.currentMoney.map((moneyObj, i) => {
                    return (
                        <li key={i}>
                            <span> {moneyObj.banknote} </span>
                            <span> {moneyObj.nominal} </span>
                            <span> {moneyObj.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '40px'}}>
                <button onClick={() => props.onClickHandler('all')}>all</button>
                <button onClick={() => props.onClickHandler('dollar')}>dollar</button>
                <button onClick={() => props.onClickHandler('ruble')}>ruble</button>
            </div>
        </>
    );
};
