
import React from 'react'
import Character from './Character'
import data from '../../context/character-data.json'

const AllCharacters = ({characterArray}) => {
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
