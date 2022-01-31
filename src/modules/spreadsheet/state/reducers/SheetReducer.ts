import IColumn from "../../interfaces/IColumn";
import IRow from "../../interfaces/IRow";
import {
    CREATE_COLUMN_SUCCESS,
    CREATE_ROW_SUCCESS,
    CREATE_SHEET_SUCCESS, GET_SHEET_ROWS_AND_COLS_SUCCESS, UPDATE_CELL_SUCCESS,
} from "../types/SheetTypes";

const initialState: {
    rows: IRow[],
    columns: IColumn[],
    sheet: {_id: string} | null,
} = {
    sheet: null,
    rows: [],
    columns: [],
};

const sheetReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case CREATE_SHEET_SUCCESS:
            return {
                ...state,
                sheet: action.payload.sheet,
            };

        case GET_SHEET_ROWS_AND_COLS_SUCCESS:
            return {
                ...state,
                rows: action.payload.rows,
                columns: action.payload.columns,
            };

        case CREATE_COLUMN_SUCCESS:
            return {
                ...state,
                columns: [...state.columns, action.payload.column],
            };

        case CREATE_ROW_SUCCESS:
            return {
                ...state,
                rows: [...state.rows, action.payload.row],
            };

        case UPDATE_CELL_SUCCESS:
            return {
                ...state,
                rows: action.payload.rows
            }

        default:
            return state;
    }
};

export default sheetReducer;