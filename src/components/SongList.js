import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSong } from '../actions'; 

class SongList extends Component {
  // bellow state object in connect mean that we now have
  // this.props === {songs: state.songs}
  // We also get a reference to [[ dispatch ]] function from our redux-store

  // Helper Function to render the list of songs 
  // PUT OUTSIDE OF render() DUDE!!!
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <div className="ui button primary"
              onClick={()=> {this.props.selectSong(song)}}
            >
              Select
            </div>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);

    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

// Function (mapStateToProps) name is just community naming
// This Will take the (STATE) data from our redux-store and process it 
// Then // Pass it as a (Props) inside of our Component
// Its gonna be called with our entire list of states
// hence // (state) argument
const mapStateToProps = (state) => {
  // This Object gonna show as a (PROPs) inside our component above
  // console.log(state);

  return { songs: state.songs }
}

// We Pass (mapStateToProps) function as {connect} first argument
// and thats how we configure our {connect} component and make it grab data from the Provider
// we Pass the Action Creator as the 2nd Argument {key: action}
// Which will also be Passed now as a (PROPs) to the component 

export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList); 