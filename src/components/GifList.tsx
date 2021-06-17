import React from 'react';
import Gif from '../components/Gif';
import NoGifs from './NoGifs';

const GifList = (props: { data: any; }) => {

    const results = props.data;
    let gifs;
    if (results.length) {
        gifs = results.map((gif: { images: { fixed_height: { url: any; }; }; id: any; }) => <Gif url={gif.images.fixed_height.url} key={gif.id} />);
    } else {
        gifs = <NoGifs />
    }

    return(
        <ul className="gif-list">
            {gifs}
        </ul>
    );
}

export default GifList;