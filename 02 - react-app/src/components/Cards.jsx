import React from 'react';

import Card from './Card';

// import './cards.json'

const Cards = () => {
    const data = [
        {
            "lang": "Python",
            "url": "https://cdn.svgporn.com/logos/python.svg",
            "fcolor": "#306998",
            "scolor": "#ffd43b"
        },
        {
            "lang": "Java",
            "url": "https://cdn.svgporn.com/logos/java.svg",
            "fcolor": "#ed1d25",
            "scolor": "#f14c4d"
        },
        {
            "lang": "React",
            "url": "https://cdn.svgporn.com/logos/react.svg",
            "fcolor": "#1c2c4c",
            "scolor": "#61dbfd"
        },
        {
            "lang": "Perl",
            "url": "https://cdn.svgporn.com/logos/perl.svg",
            "fcolor": "#e44f9c",
            "scolor": "#ff97d9"
        }
    ];

    return (
        <React.Fragment>
            {
                data.map(({ lang, url, fcolor, scolor }) => {
                    return <Card key={ lang } lang={ lang } url={ url } fcolor={ fcolor } scolor={ scolor }/>
                })
            }
        </React.Fragment>    
    );
}

export default Cards;