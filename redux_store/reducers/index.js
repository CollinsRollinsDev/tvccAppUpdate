
import { currentBookReducer } from './currentBookReducer';
import { currentChapterReducer } from './currentChapterReducer';
import { currentVerseReducer } from './currentVerseReducer';
import { currentScriptReducer } from './currentScriptReducer';


export default combineReducers({
    currentBookReducer: currentBookReducer,
    currentChapterReducer: currentChapterReducer,
    currentScriptReducer: currentScriptReducer,
    currentVerseReducer: currentVerseReducer

})