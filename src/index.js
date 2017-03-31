// Import prerequisite libaries from node modules

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Import components

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Set API key constant from google apis

const API_KEY = 'AIzaSyDEft832UAluWsImVp_6u3uBPirapPqNbs';

// Create a new component. This component will produce some HTML
// Utilizes 'fat arrow' function definition
// Rule: Only create one component per file.

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { videos: [], selectedVideo: null };
      YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos: videos, selectedVideo: videos[0] });
      });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video = {this.state.selectedVideo }/>
        <VideoList
          onVideoSelect = { selectedVideo => this.setState({ selectedVideo })}
          videos = { this.state.videos } />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// JSX allows you to use < /> for self closing tags.
// Second argument is the container div from index.html

ReactDOM.render(<App />, document.querySelector('.container'));
