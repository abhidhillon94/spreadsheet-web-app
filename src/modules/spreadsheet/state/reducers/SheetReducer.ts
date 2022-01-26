import {
    GET_SHEET_SUCCESS,
} from "../types/SheetTypes";

const initialState = {
    sheet: null,
};

const sheetReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case GET_SHEET_SUCCESS:
            return {
                ...state,
                sheet: action.payload.sheet,
            };

        default:
            return state;
    }
};

export default sheetReducer;