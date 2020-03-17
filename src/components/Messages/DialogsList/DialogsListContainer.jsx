import { actionCreatorAddInterlocutor, actionCreatorChangeInDialogList } from '../../../redux/messagesReducer';
import DialogsList from './DialogsList';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        postFieldValue: state.messagesPage.postFieldValue,
    }
};

let mapDispatchToProps = (dispatch) => {
    return ({
        changeInDialogList: (name) => {
            dispatch(actionCreatorChangeInDialogList(name))
        },
        
        addInterlocutor: () => {
            dispatch(actionCreatorAddInterlocutor());
            dispatch(actionCreatorChangeInDialogList(''));
        }
        
    })
}

const DialogsListContainer = connect (mapStateToProps, mapDispatchToProps) (DialogsList);

export default DialogsListContainer;