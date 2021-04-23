import React, {Component} from 'react';
import './table.css'
import axios from 'axios';

class Table extends Component{
  render(){
    function deleteRow(e){
      axios.delete(`http://localhost:5000/api/songs/${this.songs.id}`)
      .then(console.log(e))
    }
    return (
    <div>
    <table className="table">
          <thead>
            <tr>
              <th className="music-id">Song Number</th>
              <th className="music-title">Title</th>
              <th className="music-album">Album</th>
              <th className="music-artist">Artist</th>
              <th className="music-genre">Genre</th>
              <th className="music-release-date">Release Date</th>
              <th className="delete-song">Delete song</th>
            </tr>
          </thead>
          <tbody>
            {this.props.songs.map((songs)=>(
            <tr key={songs.id}>
              <td>{songs.id}</td>
              <td>{songs.title}</td>
              <td>{songs.album}</td>
              <td>{songs.artist}</td>
              <td>{songs.genre}</td>
              <td>{songs.releaseDate}</td>
              <button onClick={deleteRow} className="delete-button">Delete</button>
            </tr>))}
          </tbody>
        </table>
    </div>
      );
  }
}


export default Table;