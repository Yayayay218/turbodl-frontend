import {combineReducers} from 'redux'
import matches from './MatchReducer'
import livestreams from './LivestreamReducer'
export default combineReducers({
    matches,
    livestreams
})
