import React from 'react';
import './createNewSong.css';

function CreateSong(){
    return(
        <div className ="container">
            <div className='form-head'>
                <h3>Create a new song below</h3>
            </div>
            <div>
                <form action="create-new-song">
                    <label htmlFor="title">Title :</label>
                    <input type="text" placeholder="enter title here"/>
                    <label htmlFor="album">Album :</label>
                    <input type="text" placeholder="enter ablum here"/>
                    <label htmlFor="artist">Artist :</label>
                    <input type="text" placeholder="enter artist here"/>
                    <label htmlFor="genre">Genre :</label>
                    <input type="text" placeholder="enter genre here"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CreateSong;