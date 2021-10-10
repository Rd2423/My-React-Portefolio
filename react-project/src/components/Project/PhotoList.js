import React, { useState } from 'react';
import photo from '../../assets/pwdGenerator.png';

function PhotoList(){
    const [photos] = useState([
        {name: 'pwd generator',
         choices: 'Portefolio',
         description: "password generator written in javascript"
    }
    ])
    return(
        <div>
            <div className= 'flex-row'>
                    <img
                    src={photo}
                    alt= {photos.name}
                    key = {photos.name}
                    />
                      </div>
        </div>
                )
          
}

export default PhotoList;