import React from 'react';

type FooterPropsTYpe = {
    footerTitle: string
}

export const Footer = (props: FooterPropsTYpe) => {
    return (
        <div>
            {props.footerTitle}
        </div>
    );
};
