import { ChangeEvent } from 'react';
import css from '../css/Sheet.module.css';
import Cell from './Cell';
 
interface IProps {
    rows: {value: string, identifier: string}[][],
    onEditCell: { (e: ChangeEvent<HTMLInputElement>): void }
}

const Sheet = (props: IProps) => {

    return (
        <table className={css.sheet}>
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
                    )}</tr>
                })
            }
            </tbody>
        </table>
    );
}

export default Sheet;