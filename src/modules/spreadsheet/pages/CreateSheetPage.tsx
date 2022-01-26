import React, { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState } from '../../../state/RootReducer';
import { getSheet } from '../state/actions/SheetActions';

const CreateSheetPage = (props: any) => {

    const dispatch = useDispatch();
    const sheet = useSelector((state: RootState) => state?.sheet)

    useEffect(() => {
        dispatch(getSheet('asd'));
    }, []);

    return (
        <div>test {sheet.sheet?.result}</div>
    );
}

export default CreateSheetPage;