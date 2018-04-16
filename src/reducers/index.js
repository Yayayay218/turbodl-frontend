import {combineReducers} from 'redux'
import livestreams from './LivestreamReducer'
import searches from './SearchReducer'
import authenticated from './AuthReducer'

export default combineReducers({
    livestreams,
    searches,
    authenticated
})
