import React, {Component} from 'react';
import './table.css'
import axios from 'axios';

class Table extends Component{
  deleteRow(e){
    axios.delete('http://localhost:5000/api/songs/1')
  }
  render(){
      return (
    <div>
    <table className="table">
          <thead>
            <tr>
              <th className="music-title">Title</th>
              <th className="music-album">Album</th>
              <th className="music-artist">Artist</th>
              <th className="music-genre">Genre</th>
              <th className="music-release-date">Release Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.songs.map((songs)=>(
            <tr key={songs.id}>
              <td>{songs.title}</td>
              <td>{songs.album}</td>
              <td>{songs.artist}</td>
              <td>{songs.genre}</td>
              <td>{songs.releaseDate}</td>
              <button onClick={this.deleteRow}>Delete</button>
            </tr>))}
          </tbody>
        </table>
    </div>
      );
  }
}


export default Table;