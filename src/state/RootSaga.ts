import { all } from 'redux-saga/effects';
import { sheetActionsWatcher } from '../modules/spreadsheet/state/sagas/SheetSagas';

export default function* rootSaga() {
    yield all([
        sheetActionsWatcher(),
    ]);
}
