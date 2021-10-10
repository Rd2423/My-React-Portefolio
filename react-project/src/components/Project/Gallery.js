import React from 'react';
import PhotoList from './PhotoList';

function Projects( props ){
    const { currentChoice } = props;
    return(
        <sectiom>
            <h1>{currentChoice}</h1>
            <PhotoList choices={currentChoice}/>
        </sectiom>
    )
}
export default Projects;