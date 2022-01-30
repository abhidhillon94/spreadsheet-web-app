import { combineReducers } from 'redux'
import sheetReducer from '../modules/spreadsheet/state/reducers/SheetReducer';

const rootReducer = combineReducers({
    spreadsheet: sheetReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
