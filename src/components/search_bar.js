import React, { Component } from 'react';

// Define a new Search Bar class and give it all the functionality from React.Component
// Created a class component instead of a 'functional' component so that it has added functionality
// onChange console.log the event target's value
// A constructor function is the first and only method called when a new class is added
// The constructor is reserved for initial setup of the class
// super calls the constructor from the Component class
// Always manipulate the state with setState once the state has been initially set in the constructor
// A controlled component has it's value set by state, so it's value only changes when it's state changes


class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value = { this.state.term }
          onChange = {event => this.setState({ term: event.target.value })} />
      </div>
    );
  }


}

export default SearchBar;
