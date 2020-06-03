import React, {useContext} from 'react'
import CharacterReducer from "./characterReducer"
import CharacterContext from "./characterContext"
import {SELECT_CHARACTER} from '../types'

const CharacterState = props => {
    const initialState = {
        character: null,
        strength: null,
        health: null,
        hunger: null,
        offspring: null
    }
    return (
        <div>
            
        </div>
    )
}

export default CharacterState
