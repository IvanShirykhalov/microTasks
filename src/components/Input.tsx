import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (t: string)=> void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input title={props.title} onChange={onChangeHandler}/>
    );
};
