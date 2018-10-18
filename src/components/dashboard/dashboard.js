'use strict';

import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './../note-form/noteForm';
import NotesList from '../note-list/noteList';
import autoBind from '../../utils/utils';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };

    autoBind.call(this, Dashboard);
  }

  handleAddNote(note) {
    if (note.title === '') {
      return this.setState({ error: true });
    }

    note.createdOn = new Date();
    note.id = uuid();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  handleRemoveNote(note) {
    return this.setState((previousState) => {
      const filtered = previousState.notes.filter((item) => {
        return item.id !== note.id;
      });
      return {
        notes: filtered,
        error: null,
      };
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h2>New List</h2>
        <NoteForm handleAddNote={this.handleAddNote}/>
        { this.state.error && <h2 className="error">Note must have a title, silly!</h2>}
        <NotesList notes={this.state.notes} handleRemoveNote={this.handleRemoveNote}/>
      </section>
    );
  }
}
