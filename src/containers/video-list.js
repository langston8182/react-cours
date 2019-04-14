import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {
    const {movieList} = props;

    function receiveCallback(movie) {
        props.callback(movie);
    }

    return (
      <div>
          <ul>
              {
                  movieList.map(movie => {
                     return <VideoListItem key={movie.id} movie={movie} callback={receiveCallback} />;
                  })
              }
          </ul>
      </div>
    );
};

export default VideoList;