import Title from './components/title';
import Table from './components/table';
import Filterdropdown from './components/filter';
import React from 'react';

// import Apicall from './components/apiCall';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     songs : [
      {
        name: "Eat It",
        artist: "Weird Al"
      }
    ]
  }
  }
  
  render(){
     return (
    <div>
    <Title />
    <Filterdropdown />    
    <Table songs={this.songs} />
    </div>

  );

  }
 
}

export default App;
