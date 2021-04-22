import Title from './components/title';
import Table from './components/table';
import SearchBox from './components/filter';
import CreateSong from './components/createNewSong';
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
      axios.get('http://localhost:5000/api/songs')
        .then(res => this.setState({ songs : res.data}));
  }

  onSearchBoxChange = (e)=> {
    this.setState({searchBox: e.target.value.toLowerCase()});
  }
  
  render(){
    const filtersongs = this.state.songs.filter(el =>{
      return( 
        el.title.toLowerCase().includes(this.state.searchBox)||
        el.album.toLowerCase().includes(this.state.searchBox)||
        el.artist.toLowerCase().includes(this.state.searchBox)||
        el.genre.toLowerCase().includes(this.state.searchBox)||
        el.releaseDate.toLowerCase().includes(this.state.searchBox)
        )
    })
     return (
    <div className="app">
    <Title />
    <SearchBox  searchBoxChange={this.onSearchBoxChange}/>
    <CreateSong/>
    <Table songs={filtersongs}/>
    </div>

  );

  }
 
}

export default App;
