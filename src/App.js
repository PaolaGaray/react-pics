import React from 'react'
import SearchBar from './components/SearchBar'

class App extends  React.Component {

  handleSearchSubmit(query) {
    console.log(query)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
          <SearchBar 
            runMeWhenUserSubmits={this.handleSearchSubmit}
          />
      </div>
    );
  }
}
export default App;