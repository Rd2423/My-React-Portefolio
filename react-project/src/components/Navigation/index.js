import React, { useEffect } from 'react';

function Nav(props){
    const {
        choices = [],
        setCurrentChoice,
        currentChoice,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = currentChoice.name;
    }, [currentChoice])
    
    return(
        <header>
            <h1 className="name">Rayan Diouf</h1>
            <ul className= "navbar">
            
            <nav>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                {choices.map((choice) => (
                    <li className={`mx-1 ${
                        currentChoice.name === choice.name  && !contactSelected && 'navActive'
                    }`}
                    key={choice.name}
                    >
                        <span
                        onClick={() => {
                            setCurrentChoice(choice);
                            setContactSelected(false);
                        }}
                        >{choice.name}</span>
                    </li>
                ))}
            </nav>
            </ul>
            
        </header>
        );
}
export default Nav;