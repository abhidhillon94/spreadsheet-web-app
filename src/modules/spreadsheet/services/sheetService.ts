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
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        data: {cell: {[colId]: {value}}},
    });

    if (response.status !== 204) {
        // handle error
    }
}

/**
 * fetches columns and rows of a sheet
 */
const getSheetData = async (sheetId: string) => {
    const rowsAndCols = await Promise.all([
        getSheetRows(sheetId), getSheetColumns(sheetId),
    ]);
    return {rows: rowsAndCols[0], columns: rowsAndCols[1]};
}

const getSheetRows = async (sheetId: string) => {
    const response = await axios.request({
        url: `/api/spreadsheet/sheets/${sheetId}/rows`,
        baseURL: process.env.REACT_APP_BASE_URL,
        method: 'GET',
    });
    if (response.status === 200 && response.data.rows) {
        return response.data.rows;
    }
}

const getSheetColumns = async (sheetId: string) => {
    const response = await axios.request({
        url: `/api/spreadsheet/sheets/${sheetId}/columns`,
        baseURL: process.env.REACT_APP_BASE_URL,
        method: 'GET',
    });
    if (response.status === 200 && response.data.columns) {
        return response.data.columns;
    }
}

const createColumn = async (sheetId: string, column: {dataType: string, value: string}) => {
    const response = await axios.request({
        url: `/api/spreadsheet/sheets/${sheetId}/columns`,
        baseURL: process.env.REACT_APP_BASE_URL,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        data: {column},
    });
    if (response.status === 200 && response.data.column) {
        return response.data.column;
    }
}

const createRow = async (sheetId: string, row: {order: number}) => {
    const response = await axios.request({
        url: `/api/spreadsheet/sheets/${sheetId}/rows`,
        baseURL: process.env.REACT_APP_BASE_URL,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        data: {row},
    });
    if (response.status === 200 && response.data.row) {
        return response.data.row;
    }
}

const sheetService = {
    createSheet,
    updateCells,
    getSheetData,
    createColumn,
    createRow,
}

export default sheetService;
