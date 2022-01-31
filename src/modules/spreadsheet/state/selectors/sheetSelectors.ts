import { RootState } from "../../../../state/RootReducer"
import IColumn from "../../interfaces/IColumn";
import IRow from "../../interfaces/IRow";

const selectSortedRows = (state: RootState) => {

    const originalColumns: IColumn[] = state.spreadsheet.columns;
    const originalrows: IRow[] = state.spreadsheet.rows;

    // this would be useful when we implement ordering functionality
    // originalrows.sort((a,b) => a.order - b.order);

    const rows: {value: string, identifier: string}[][] = [];

    originalrows.map((row, rowIndex) => {
        const cells: {value: string, identifier: string}[] = [];
        originalColumns.forEach((col, colIndex) => {
            cells.push({
                // @ts-ignore
                value: row.cells ? row.cells[col._id]?.value : '',
                identifier: `${row?._id}#${col._id}-${rowIndex}#${colIndex}`
            });
        })
        rows.push(cells);
    })

    // console.log({rows})

    return rows;
}

const selectColumns = (state: RootState): string[] => {
    return state.spreadsheet.columns.map((col: any) => col.value);
}

const sheetSelectors = {
    selectSortedRows,
    selectColumns
}

export default sheetSelectors;
