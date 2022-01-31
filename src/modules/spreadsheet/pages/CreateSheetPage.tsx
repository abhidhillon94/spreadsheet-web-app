import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/RootReducer';
import { createSheet } from '../state/actions/SheetActions';

import css from '../css/CreateSheetPage.module.css';
import { useNavigate } from 'react-router-dom';

const CreateSheetPage = (props: any) => {

    const dispatch = useDispatch();
    const sheet = useSelector((state: RootState) => state?.spreadsheet?.sheet)
    const navigate = useNavigate();

    useEffect(() => {
        if (sheet) {
            navigate(`/${sheet._id}`)
        }
    }, [sheet]);

    const onClickCreateSheet = () => {
        dispatch(createSheet({}));
    }

    return (
        <div className={css.wrapper} >
            <button onClick={onClickCreateSheet} >Create New Sheet</button>
        </div>
    );
}

export default CreateSheetPage;