const initialState = {
    taskList: [],
    completedTasks: [],
    deletedTasks: []
}

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';


export function addTask(task) {
    console.log(task);
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function completeTask(task) {
    return {
        type: COMPLETE_TASK,
        payload: task
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id
    }
}



export default function reducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return Object.assign(
                {},
                state,
                {taskList: [...state.taskList, action.payload]}
             );
        case COMPLETE_TASK:
             return Object.assign(
                 {},
                 state,
                 {completedTasks: [...state.completedTasks, action.payload]}
             );
        case DELETE_TASK:
             return Object.assign(
                 {},
                 state,
                 {deletedTasks: [...state.deletedTasks, state.taskList.filter(task => task.id === action.payload)[0]]},
                 {taskList: state.taskList.filter(task => task.id !== action.payload)}
             )
        default:
            return state;
    }
}