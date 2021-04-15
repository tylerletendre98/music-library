import React, {Component} from 'react';
import './table.css'

class Table extends Component{
    render(){
        return this.props.songs.map((songs)=> (
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
              <tr>
                <td>{songs.title}</td>
                <td>{songs.album}</td>
                <td>{songs.artist}</td>
                <td>{songs.genre}</td>
                <td>{songs.releaseDate}</td>
              </tr>
            </tbody>
          </table>
        ));
    }
}


export default Table;