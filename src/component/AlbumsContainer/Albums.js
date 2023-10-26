import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services/albumsService";
import {Album} from "./Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAllAlbums().then(({data}) => setAlbums(data))
    }, [])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};