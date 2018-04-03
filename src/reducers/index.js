import {combineReducers} from 'redux'
import matches from './MatchReducer'
import livestreams from './LivestreamReducer'
import searches from './SearchReducer'
export default combineReducers({
    matches,
    livestreams,
    searches
})
