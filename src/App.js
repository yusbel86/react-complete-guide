import React, {Component} from 'react';
import Person from './Person/Person';
import styled from 'styled-components';
import Validation from './Validation/Validation';
import './App.css';

import person from './Person/Person';

const StyledButton = styled.button`
background-color: green;
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: lightgreen;
  color: black;
}
`;


class App extends Component {
  state = {
    persona: [
      {id: 'asaslk', name: 'Yusbel', age: 33 },
      {id: 'sjd', name: 'Yoda', age: 35 },
      {id: 'ckjsdc', name: 'Dado', age: 1 }
    ],
    userInput: ''
  }

  inputChangedHandler = (event) => {
     this.setState({userInput: event.target.value})
  }

  
  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persona.findIndex(p =>{
          return p.id === id;
    });
    
    const person = {
        ...this.state.persona[personIndex]
    };

    person.name = event.target.value;
    
    const persona = [...this.state.persona];
    persona[personIndex] = person;

    this.setState({ persona: persona })
  }

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persona.splice();
      const persons = [...this.state.persona];
      persons.splice(personIndex, 1);
      this.setState({persona: persons});
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
  }

 

 render(){
   const style ={};
      let person = null;
   if (this.state.showPerson){
     person = ( 
      <div>
        {this.state.persona.map((person, index) =>{
           return <Person 
           click={() => this.deletePersonHandler(index)}
           name={person.name}
           age={person.age}
           key={index}
           changed={(event) => this.nameChangeHandler(event, person.id)}
           />
        })}      
     </div>
     );
     style.backgroundColor = 'red';
     style[':hover'] = {
       backgroundColor: 'salmon',
       color: 'black'
     }
   }

     const clasess = [];
     if(this.state.persona.length <= 2){
       clasess.push('color');
     }
     if (this.state.persona.length <= 1){
       clasess.push('bold');
     }
  return (
    
    <div className="App">
      <h1>Hi I' m a react App </h1>
      <p className={clasess.join(' ')}>this really working!</p>
      <input 
      type="text" 
      onChange={this.inputChangedHandler}
      />
      <p>{this.state.userInput}</p>
      <Validation 
         inputLenght={this.state.userInput.length}
         />
      <StyledButton  
         
         onClick={this.togglePersonHandler}>Toggle Person
        </StyledButton>
         {person}  
    </div>
    
     );
 }
}

export default App;
