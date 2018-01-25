import { database } from '../../firebase';

const NEW_TASK = 'NEW_TASK';

export const getTask = (id) => dispatch => {
    database.ref(`/tasks/${id}`).on('value', snapshot => {
        dispatch(newTask(snapshot.val()));
    })
}

const newTask = (data) => ({
    type: NEW_TASK,
    data
});

const INITIAL_STATE = {
    data: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_TASK:
            return {
                data: action.data
            }
        default:
            return state;
    }
}
