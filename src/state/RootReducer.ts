import { combineReducers } from 'redux'
import sheetReducer from '../modules/spreadsheet/state/reducers/SheetReducer';

const rootReducer = combineReducers({
    sheet: sheetReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
