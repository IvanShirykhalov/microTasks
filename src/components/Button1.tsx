import React from "react";

type ButtonPropsType = {
    callBack: () => void
    name: string
}

export const Button1 = (props: ButtonPropsType) => {

    const onClickHandler = () =>{
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}