import Title from './components/title';
import Table from './components/table';
import Filterdropdown from './components/filter';
import React from 'react';
import axios from 'axios';

// import Apicall from './components/apiCall';
class App extends React.Component {
  state = {
    songs: []
  }
  
  componentDidMount(){
      axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        .then(res => this.setState({ songs : res.data}))
  }
  
  
  render(){
     return (
    <div className="app">
    <Title />
    <Filterdropdown /> 
    <Table songs={this.state.songs}/>
    </div>

  );

  }
 
}

export default App;
