import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Sheet from '../components/Sheet';
import { createColumn, createRow, getSheetRowsAndCols, updateCell } from '../state/actions/SheetActions';
import sheetSelectors from '../state/selectors/sheetSelectors';

const EditSheetPage = (props: any) => {

    const dispatch = useDispatch();
    const params = useParams<{sheetId: string}>();
    const sheetRows = useSelector(sheetSelectors.selectSortedRows);
    const sheetColumns = useSelector(sheetSelectors.selectColumns);

    useEffect(() => {
        if (params.sheetId) {
            dispatch(getSheetRowsAndCols(params.sheetId))
        }
    }, []);

    const onEditCell = (e: ChangeEvent<HTMLInputElement>) => {
        const elementDataAttribute = e.target.getAttribute('data-identifier');
        const idsAndIndex = elementDataAttribute?.split('-');

        if (idsAndIndex?.length === 2) {
            const rowId = idsAndIndex[0].split('#')[0];
            const colId = idsAndIndex[0].split('#')[1];
            params.sheetId && dispatch(updateCell(params.sheetId, rowId, colId, e.target.value));
        }
    }

    const onAddNewColumn = (columnValue: string, dataType: string) => {
        params.sheetId && dispatch(createColumn(params.sheetId, {value: columnValue, dataType}))
    }

    const onAddNewRow = () => {
        params.sheetId && dispatch(createRow(params.sheetId, {order: sheetRows.length}))
    }

    return (
        <div >
            <Sheet
                rows={sheetRows}
                columns={sheetColumns}
                onEditCell={onEditCell}
                onAddNewColumn={onAddNewColumn}
                onClickAddRow={onAddNewRow}
            />
        </div>
    );
}

export default EditSheetPage;
