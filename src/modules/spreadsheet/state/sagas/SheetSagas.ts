import { put, takeEvery, call, select } from 'redux-saga/effects';
import { RootState } from '../../../../state/RootReducer';
import IRow from '../../interfaces/IRow';
import sheetService from '../../services/sheetService';
import { createColumnSuccess, createRowSuccess, createSheetSuccess, getSheetRowsAndColsSuccess, updateCellSuccess } from '../actions/SheetActions';
import { CREATE_COLUMN, CREATE_ROW, CREATE_SHEET, GET_SHEET_ROWS_AND_COLS, UPDATE_CELL } from '../types/SheetTypes';

function* createSheetWorker(action: any): any {
    const sheet = yield call(sheetService.createSheet, {});
    yield put(createSheetSuccess(sheet));
}

function* getSheetRowsAndColsWorker(action: any): any {
    const rowsAndCols = yield call(sheetService.getSheetData, action.payload.sheetId);
    yield put(getSheetRowsAndColsSuccess(rowsAndCols.rows, rowsAndCols.columns));
}

function* createColumnWorker(action: any): any {
    const column = yield call(sheetService.createColumn, action.payload.sheetId, action.payload.column);
    yield put(createColumnSuccess(column));
}

function* createRowWorker(action: any): any {
    const row = yield call(sheetService.createRow, action.payload.sheetId, action.payload.row);
    yield put(createRowSuccess(row));
}

function* updateCellWorker(action: any): any {
    yield call(
        sheetService.updateCells,
        action.payload.sheetId,
        action.payload.rowId,
        action.payload.colId,
        action.payload.value,
    );
    const rows = yield select((state: RootState)=> state.spreadsheet.rows);

    const updatedRows = updateCellValueInRows(
        rows,
        action.payload.rowId,
        action.payload.colId,
        action.payload.value
    );

    yield put(updateCellSuccess(updatedRows));
}

const updateCellValueInRows = (rows: IRow[], rowId: string, colId: string, value: string) => {
    const rowsCopy = JSON.parse(JSON.stringify(rows));    
    for (const index in rowsCopy) {
        if (rowsCopy[index]._id === rowId) {
            if (rowsCopy[index].cells) {
                rowsCopy[index].cells[colId] = {value};
            } else {
                rowsCopy[index].cells = {[colId]: {value}};
            }
            return rowsCopy;
        }
    }
}

export function* sheetActionsWatcher() {
    yield takeEvery(CREATE_SHEET, createSheetWorker);
    yield takeEvery(GET_SHEET_ROWS_AND_COLS, getSheetRowsAndColsWorker);
    yield takeEvery(CREATE_COLUMN, createColumnWorker);
    yield takeEvery(CREATE_ROW, createRowWorker);
    yield takeEvery(UPDATE_CELL, updateCellWorker);
}
