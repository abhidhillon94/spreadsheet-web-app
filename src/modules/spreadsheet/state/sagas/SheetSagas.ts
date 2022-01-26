import { put, takeEvery } from 'redux-saga/effects';
import { getSheetSuccess } from '../actions/SheetActions';
import { GET_SHEET } from '../types/SheetTypes';

function* getSheetsWorker(action: any) {
    yield put(getSheetSuccess({result: 'success'}));
}

export function* sheetActionsWatcher() {
    yield takeEvery(GET_SHEET, getSheetsWorker);
}
