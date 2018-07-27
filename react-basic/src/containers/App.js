import React, { Component } from 'react';
import '../containers/App.css';
import Radium from 'radium';
import Person from '../components/Persons/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'akgdh', name: 'Abdullah', age: 22},
      { id: 'uioej', name: 'Asaaaad', age: 21}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons]; //copyng the original array to a new array using the spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); 
    
    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

    togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => 
            { //Executing a function on every element of persons array 
              return ( <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            )
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style['hover'] = {
        backgroundColor: 'white',
        color: 'black'
      };
    }
    
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1){
      classes.push('bold'); //classes = ['bold']
    }

    return (
      <div className="App">
          <h1>Hi, I am a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
