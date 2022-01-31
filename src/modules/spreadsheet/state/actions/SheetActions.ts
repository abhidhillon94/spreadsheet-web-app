import IRow from "../../interfaces/IRow";
import {
    CREATE_COLUMN,
    CREATE_COLUMN_SUCCESS,
    CREATE_ROW,
    CREATE_ROW_SUCCESS,
    CREATE_SHEET,
    CREATE_SHEET_SUCCESS,
    GET_SHEET_ROWS_AND_COLS,
    GET_SHEET_ROWS_AND_COLS_SUCCESS,
    UPDATE_CELL,
    UPDATE_CELL_SUCCESS,
} from "../types/SheetTypes";

export const getSheetRowsAndCols = (sheetId: string) => {
    return {
        type: GET_SHEET_ROWS_AND_COLS,
        payload: {
            sheetId
        },
    };
};

export const getSheetRowsAndColsSuccess = (rows: any, columns: any) => {
    return {
        type: GET_SHEET_ROWS_AND_COLS_SUCCESS,
        payload: {
            rows, columns
        },
    };
};

export const createSheet = (sheet: any) => {
    return {
        type: CREATE_SHEET,
        payload: {
            sheet
        },
    };
};

export const createSheetSuccess = (sheet: any) => {
    return {
        type: CREATE_SHEET_SUCCESS,
        payload: {
            sheet
        },
    };
};

export const updateCell = (sheetId: string, rowId: string, colId: string, value: string) => {
    return { type: UPDATE_CELL, payload: { sheetId, rowId, colId, value } };
};

export const updateCellSuccess = (rows: IRow[]) => {
    return {
        type: UPDATE_CELL_SUCCESS,
        payload: {rows},
    };
};

export const createColumn = (sheetId: string, column: {dataType: string, value: string}) => {
    return { type: CREATE_COLUMN, payload: { sheetId, column } };
};

export const createColumnSuccess = (column: {dataType: string, value: string}) => {
    return { type: CREATE_COLUMN_SUCCESS, payload: {column} };
};

export const createRow = (sheetId: string, row: {order: number}) => {
    return { type: CREATE_ROW, payload: { sheetId, row } };
};

export const createRowSuccess = (row: {_id: string, order: number, cells: {[column: string]: {value: string}}}) => {
    return { type: CREATE_ROW_SUCCESS, payload: {row} };
};
