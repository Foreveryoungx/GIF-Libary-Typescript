import React from 'react';

const Gif = (props: { url: string | undefined; }) => (
    <li className="gif-wrap">
        <img src={props.url} alt=""/>
    </li>
);

export default Gif;