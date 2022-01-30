import axios from 'axios';

const createSheet = async (sheet: any) => {
    const response = await axios.request({
        url: '/api/spreadsheet/sheets',
        baseURL: process.env.REACT_APP_BASE_URL,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        data: {sheet: {}},
    });

    if (response.status === 200 && response.data.sheet) {
        return response.data.sheet;
    }
}

const updateCells = async (sheetId: string, rowId: string, colId: string, value: string) => {
    const response = await axios.request({
        url: `/api/spreadsheet/sheets/${sheetId}/rows/${rowId}/cells`,
        baseURL: process.env.REACT_APP_BASE_URL,
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        data: {cell: {[colId]: {value}}},
    });

    if (response.status !== 204) {
        console.log(response);
        // handle
    }
}

const sheetService = {
    createSheet,
    updateCells,
}

export default sheetService;
