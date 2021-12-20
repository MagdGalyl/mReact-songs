import React, { Component } from 'react';
import { connect } from 'react-redux'

class SongList extends Component {
  render() {
    renderList() {
      return this.props.songs.map((song)=>{
        return(
          <div>
            <li>{song}</li>
          </div>
        );
      })
    }

    return (
      <div>
        {renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList); 