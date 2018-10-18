'use strict';

import React from 'react';

export default class Note extends React.Component {
  render() {
    return (
    <section className="noteInList">
      <p>
        ____________________________________________________________________________________________
      </p>
      <button className="deleteBtn" onClick={() => this.props.handleRemoveNote(this.props.note)}>Delete Note</button>
      {this.props.note.title} | | {this.props.note.content}
    </section>
    );
  }
}
