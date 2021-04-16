import Title from './components/title';
import Table from './components/table';
import SearchBox from './components/filter';
import React from 'react';
import axios from 'axios';
import './app.css';

// import Apicall from './components/apiCall';
class App extends React.Component {
  state = {
    songs: [],
    searchBox: '',
  }
  
  componentDidMount(){
      axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        .then(res => this.setState({ songs : res.data}))
  }

  onSearchBoxChange = (e)=> {
    this.setState({searchBox: e.target.value.toLowerCase()});
  }
  
  render(){
    const filtersongs = this.state.songs.filter(el =>{
      return el.title.toLowerCase().includes(this.state.searchBox)
    })
     return (
    <div className="app">
    <Title />
    <SearchBox  searchBoxChange={this.onSearchBoxChange}/>
    <Table songs={filtersongs}/>
    </div>

  );

  }
 
}

export default App;
