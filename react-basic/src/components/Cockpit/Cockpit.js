import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
    if ( props.showPersons ) {
        btnClass = classes.Red;
    };

    if ( props.persons.length <= 2 ) {
        assignedClasses.push( assignedClasses.red );
    };

    if ( props.persons.length <= 1 ){
        assignedClasses.push ( assignedClasses.bold );
    };
    return (
        <div>
            <h1>Hi, I am a React App</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons 
            </button>
        </div>
    );
};

export default cockpit;