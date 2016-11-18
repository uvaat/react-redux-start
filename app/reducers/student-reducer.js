import * as types from '../actions/action-types';

const initialState = {
    student: false,
    students: [],
    studentProfile: {}
};

const userReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.CREATE_STUDENT_SUCCESS:
        return Object.assign({}, state, { student : action.student });

        case types.GET_STUDENTS_SUCCESS:
        return Object.assign({}, state, {students : action.students});

    }

    return state;

}

export default userReducer;
