import React from 'react';

type headerType = {
    headerTitle: string
}

export const Header = (props: headerType) => {
    return (
        <div>
            {props.headerTitle}
        </div>
    );
};
