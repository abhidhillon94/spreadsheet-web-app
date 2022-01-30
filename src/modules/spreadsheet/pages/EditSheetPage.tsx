import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Sheet from '../components/Sheet';

const EditSheetPage = (props: any) => {

    const dispatch = useDispatch();
    const [rows, setRows] = useState<{value: string, identifier: string}[][]>([]);

    // const sheet = useSelector((state: RootState) => state?.sheet)

    const colSortOrder: string[] = ['c1', 'c2', 'c3'];
    // try to get rid of this after usage
    const originalRows = [
        {
            _id: "r1",
            order: 1,
            sheetId: "61f642e78752cb150a471a7f",
            cells: {
                'c1': { "value": "row1col1" },
                'c2': { "value": "row1col2" },
                'c3': { "value": "row1col3" }
            }
        },
        {
            _id: "r3",
            order: 3,
            sheetId: "61f642e78752cb150a471def",
            cells: {
                'c1': { "value": "row3col1" },
                'c2': { "value": "row3col2" },
                'c3': { "value": "row3col3" }
            }
        },
        {
            _id: "r2",
            order: 2,
            sheetId: "61f642e78752cb150a471abc",
            cells: {
                'c1': { "value": "row2col1" },
                'c2': { "value": "row2col2" },
                'c3': { "value": "row2col3" }
            }
        },
    ];

    useEffect(() => {
        originalRows.sort((a,b) => a.order - b.order);
        const preparedRows: {value: string, identifier: string}[][] = [];

        originalRows.map((row, rowIndex) => {
            const cells: {value: string, identifier: string}[] = [];
            colSortOrder.forEach((col, colIndex) => {
                cells.push({
                    // @ts-ignore
                    value: row.cells[col].value,
                    identifier: `${row._id}#${col}-${rowIndex}#${colIndex}`
                });
            })
            preparedRows.push(cells);
            setRows(preparedRows);
        })
    },[]);

    return (
        <div >
            <Sheet 
                rows={rows}
                onEditCell={(e) => {
                    const elementDataAttribute = e.target.getAttribute('data-identifier');

                    const idsAndIndex = elementDataAttribute?.split('-');
                    if (idsAndIndex?.length === 2) {
                        const rowId = idsAndIndex[0].split('#')[0];
                        const colId = idsAndIndex[0].split('#')[1];

                        const rowIndex = idsAndIndex[1].split('#')[0];
                        const colIndex = idsAndIndex[1].split('#')[1];

                        console.log({rowId, colId, rowIndex, colIndex});

                        const preparedRows = JSON.parse(JSON.stringify(rows));
                        preparedRows[rowIndex][colIndex].value = e.target.value;
                        setRows(preparedRows);
                    }
                }}
            />
        </div>
    );
}

export default EditSheetPage;
