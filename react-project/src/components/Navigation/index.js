import React, { useEffect } from 'react';

function Nav(props){
    const {
        choices = [],
        setCurrentChoice,
        currentChoice
    } = props;
    
    useEffect(() => {
        document.title = currentChoice.name;
    }, [currentChoice])
    
    return(
        <header>
            <h1 className="name">Rayan Diouf</h1>
            <ul className= "navbar">
            <li className="mx-1">About me</li>
            <nav>
                {choices.map((choice) => (
                    <li className={`mx-1 ${
                        currentChoice.name === choice.name  && 'navActive'
                    }`}
                    key={choice.name}
                    >
                        <span
                        onClick={() => {
                            setCurrentChoice(choice)
                        }}
                        ></span>
                    </li>
                ))}
            </nav>
            </ul>
            
        </header>
        );
}
export default Nav;