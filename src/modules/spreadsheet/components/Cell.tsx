import { ChangeEvent, useEffect, useState } from 'react';

interface IProps {
    value: string;
    identifier: string;
    onEditCell: { (e: ChangeEvent<HTMLInputElement>): void }
}

const Cell = (props: IProps) => {
    return (
        <td>
            <input
                data-identifier={props.identifier}
                onChange={props.onEditCell}
                value={props.value}
            />
        </td>
    );
}

export default Cell;
