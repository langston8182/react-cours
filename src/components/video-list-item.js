import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"

const VideoListItem = (props) => {
    //const movie = props.movie;
    const {movie} = props;

    function handleOnClick() {
        props.callback(movie);
    }

    return (
        <li className="list-group-item" onClick={handleOnClick}>
            <div className="media">
                <div className="media-left">
                    <img className="media-object img-thumbnail" height="100px" width="100px" src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
                </div>
                <div className="media-body">
                    <h5 className="title_list_item">{movie.title}</h5>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;