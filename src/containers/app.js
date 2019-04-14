import React, {Component} from "react";
import axios from 'axios';
import SearchBar from '../components/search-bar';
import VideoDetail from '../components/video-detail';
import VideoList from './video-list'

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.des&include_adult=false&append_to_response=images";
const API_KEY = "09d238f73c912341314945569e1349f5";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {movieList:{}, currentMovie:{}};
    }

    componentWillMount() {
        this.initMovies();
    }

    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&api_key=${API_KEY}`).then(function (response) {
            this.setState({movieList:response.data.results.slice(1, 6), currentMovie:response.data.results[0]});
        }.bind(this));
    }

    render() {
        const renderVideoList = () => {
            if (this.state.movieList.length >= 5) {
                return <VideoList movieList={this.state.movieList} />;
            }
        };

        return (
            <div>
                <SearchBar/>
                {renderVideoList()}
                <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
            </div>
        )
    }
}

export default App;