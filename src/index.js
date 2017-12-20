import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCSocdS3SBE21vi7PPqhkYSPbVXVIjCPVw';

YTSearch({ key: API_KEY, term: 'puppies' }, function (data) {
    console.log(data);
});
//Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));