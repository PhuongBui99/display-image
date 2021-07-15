import React from 'react'
function B(state = true, action){
    switch (action.type){
        case 'checked':
            return true
        case 'unchecked':
            return false
        default:
            return state
    }
}

export default B