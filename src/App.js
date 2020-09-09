import React from 'react'
import unsplash from '../src/api/unsplash'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'


class App extends  React.Component {

  state = {
    images: []
  };

  handleSearchSubmit = async (query) =>  {
    const response = await unsplash.get('/search/photos', {
      params: { query: query },
    });
    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
          <SearchBar 
            runMeWhenUserSubmits={this.handleSearchSubmit}
          />
          <ImageList 
            images={this.state.images}
          />
      </div>
    );
  }
}
export default App;