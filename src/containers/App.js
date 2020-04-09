import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../component/persons/Persons';
import Cockpit from '../component/cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: 'asaslk', name: 'Yusbel', age: 33 },
      {id: 'sjd', name: 'Yoda', age: 35 },
      {id: 'ckjsdc', name: 'Dado', age: 1 }
    ],
    otherSatae: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
          return p.id === id;
    });
    
    const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persona.splice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  } 

 render () {   
      let persons = null;

   if (this.state.showPersons){
     persons =     
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        /> ;
     } 
    
  return (    
    <div className={classes.App}>
      <Cockpit 
        showPerson={this.state.showPerson}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}/>
         {persons}  
    </div>   
     );
 }
}

export default App;
