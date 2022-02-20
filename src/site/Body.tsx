import React from 'react';

type BodyPropsType = {
    bodyTitle: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <div>
            {props.bodyTitle}
        </div>
    );
};
