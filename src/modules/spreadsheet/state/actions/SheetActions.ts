import { GET_SHEET, GET_SHEET_SUCCESS } from "../types/SheetTypes";

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
