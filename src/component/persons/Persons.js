import React from 'react';

import Person from './person/Person';

const Persons = (props) => props.persons.map( (person, index) => {
        return <Person 
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={index}
        changed={(event) => props.changed(event, person.id)}
        />
     });

     export default Persons;