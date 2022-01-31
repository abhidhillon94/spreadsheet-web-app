import { ChangeEvent, useState } from 'react';

interface IProps {
    onAddNewColumn: (column: string, dataType: string) => void;
    dataTypes: string[];
}

const AddColumn = (props: IProps) => {

    const [creationInProgress, setCreationInProgress] = useState(false);
    const [colValue, setColValue] = useState('');

    const onChangeColVal = (e: ChangeEvent<HTMLInputElement>) => {
        setColValue(e.target.value);
    }

    const onClickAdd = () => {
        if (colValue) {
            // TODO: add functionality to allow user to choose the datatype which is currently hardcoded
            props.onAddNewColumn(colValue, 'TEXT');
            setColValue('');
            setCreationInProgress(false);
        }
    }

    return (
        <td>
            {
                creationInProgress ?
                <>
                    <input
                        style={{backgroundColor: 'white'}}
                        value={colValue}
                        onChange={onChangeColVal}
                    />
                    <button onClick={onClickAdd}>+</button>
                </> :
                <button onClick={() => {
                    setCreationInProgress(true)
                }} >+ Add Column</button>
            }
        </td>
    );
}

export default AddColumn;
