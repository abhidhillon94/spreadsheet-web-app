import { ChangeEvent, useEffect } from 'react';
import css from '../css/Sheet.module.css';
import AddColumn from './AddColumn';
import Cell from './Cell';
 
interface IProps {
    rows: {value: string, identifier: string}[][];
    onEditCell: { (e: ChangeEvent<HTMLInputElement>): void };
    columns: string[];
    onAddNewColumn: (column: string, dataType: string) => void;
    onClickAddRow: () => void;
}

const Sheet = (props: IProps) => {

    return (
        <table className={css.sheet}>
            <thead>
                <tr>
                {props.columns.map((column, index) => 
                    <Cell
                        key={`00#${index}`}
                        identifier=''
                        value={column}
                        onEditCell={() => {}}
                    />
                )}
                <AddColumn onAddNewColumn={props.onAddNewColumn} dataTypes={['TEXT', 'NUMERIC']} />
                </tr>
            </thead>
            <tbody>
            {
                props.rows.map((cells, rowIndex) => {
                    return <tr key={rowIndex}>{cells.map((cell, cellIndex) => 
                        <Cell
                            key={`${rowIndex}#${cellIndex}`}
                            identifier={cell.identifier}
                            value={cell.value}
                            onEditCell={props.onEditCell}
                        />
                    )}<td/></tr>
                })
            }
            {props.columns.length > 0 && <tr key='arbitary'>
                <td colSpan={props.columns.length + 1} align="center">
                    <button onClick={props.onClickAddRow} >Add New Row</button>
                </td>
            </tr>}
            </tbody>
        </table>
    );
}

export default Sheet;