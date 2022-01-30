import { put, takeEvery, call } from 'redux-saga/effects';
import sheetService from '../../services/sheetService';
import { getSheetSuccess } from '../actions/SheetActions';
import { CREATE_SHEET, GET_SHEET, UPDATE_CELL } from '../types/SheetTypes';

function* getSheetsWorker(action: any) {
    yield put(getSheetSuccess({result: 'success'}));
}

function* createSheetWorker(action: any): any {
    const sheet = yield call(sheetService.createSheet, {});
    yield put(getSheetSuccess(sheet));
}

export function* sheetActionsWatcher() {
    yield takeEvery(GET_SHEET, getSheetsWorker);
    yield takeEvery(CREATE_SHEET, createSheetWorker);
}
