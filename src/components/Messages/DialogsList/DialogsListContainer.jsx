import { actionCreatorAddInterlocutor } from '../../../redux/messagesReducer';
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
        addInterlocutor: (newDialog) => {
            dispatch(actionCreatorAddInterlocutor(newDialog));
        }
        
    })
}

const DialogsListContainer = connect (mapStateToProps, mapDispatchToProps) (DialogsList);

export default DialogsListContainer;