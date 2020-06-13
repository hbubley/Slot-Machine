
import React, {useContext} from 'react'
import Character from './Character'
import data from '../../context/character-data.json'
import SlotContext from '../../context/slots/slotContext';

const AllCharacters = () => {
    const slotContext = useContext(SlotContext);
    const { characterArray } = slotContext;
    let character = characterArray.map((char, index) => {
        let currentCharacter = data[char]
        return <Character character={currentCharacter} key={index} />
    })

    return (
        <div className="all-characters">
            {character}
        </div>
    )
}

export default AllCharacters
