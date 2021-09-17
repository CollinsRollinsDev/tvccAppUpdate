  
import {combineReducers} from 'redux'
import { sideMenuReducer } from './sideMenuReducer';
import { openChatReducer } from './openChatReducer';
import { closeChatReducer } from './closeChatReducer';

export default combineReducers({
    menu: sideMenuReducer,
    closeChatReducer : closeChatReducer,
    openChatReducer: openChatReducer

})