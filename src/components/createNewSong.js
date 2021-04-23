import axios from 'axios';
import React, {Component} from 'react';
import './createNewSong.css';

class CreateSong extends Component{
    state = {
        title:'',
        album:'',
        artist:'',
        genre:'',
        releaseDate:'',
    }

    changeHandler= e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        axios.post('http://localhost:5000/api/songs', this.state)
            .then(response =>{
                this.setState({response})
            })
            .catch(error => {
                console.log(error)
            })
    }
    render(){
        return(
            <div className ="container">
                <div className='form-head'>
                    <h4>Create a new song: </h4>
                </div>
                <div>
                    <form action="create-new-song" onSubmit={this.submitHandler}>
                        <label htmlFor="title">Title :</label>
                            <input type="text" 
                            name="title" 
                            placeholder="enter title"
                            value={this.title}
                            onChange={this.changeHandler} 
                            />
                        <label htmlFor="album">Album :</label>
                            <input type="text" 
                            name="album" 
                            placeholder="enter album"
                            value={this.album} 
                            onChange={this.changeHandler} 
                            />
                        <label htmlFor="artist">Artist :</label>
                            <input type="text" 
                             name="artist" 
                             placeholder="enter artist" 
                             value={this.artist}
                             onChange={this.changeHandler}
                             />
                        <label htmlFor="genre">Genre :</label>
                            <input type="text" 
                            name="genre" 
                            placeholder="enter genre"
                            value={this.genre}
                            onChange={this.changeHandler}/>
                        <label htmlFor="release-date">Release date :</label>
                            <input type="text" 
                            name="releaseDate" 
                            placeholder="enter Release date"
                            value={this.releaseDate} 
                            onChange={this.changeHandler}
                            />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default CreateSong;