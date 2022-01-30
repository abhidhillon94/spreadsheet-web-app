import { CREATE_SHEET, CREATE_SHEET_SUCCESS, GET_SHEET, GET_SHEET_SUCCESS, UPDATE_CELL, UPDATE_CELL_SUCCESS } from "../types/SheetTypes";

export const getSheet = (sheetId: string) => {
    return {
        type: GET_SHEET,
        payload: {
            sheetId
        },
    };
};

export const getSheetSuccess = (sheet: any) => {
    return {
        type: GET_SHEET_SUCCESS,
        payload: {
            sheet
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

export const updateCell = (cell: any) => {
    return {
        type: UPDATE_CELL,
        payload: {
            cell
        },
    };
};

export const updateCellSuccess = () => {
    return {
        type: UPDATE_CELL_SUCCESS,
        payload: {},
    };
};
