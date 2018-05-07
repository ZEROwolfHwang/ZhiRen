/**
 * Created by zerowolf Date: 2018/4/25 Time: 上午9:31
 */



export const START = 'START';
export const STOP = 'STOP';
export const RESET = 'RESET';
export const RUN_TIMER = 'RUN_TIMER';




// 原始默认state
const defaultState = {
    seconds: 0,
    runStatus: false
}

export const timer=(state = defaultState, action)=> {
    switch (action.type) {
        case START:
            return { ...state, runStatus: true };
        case STOP:
            return { ...state, runStatus: false };
        case RESET:
            return { ...state, seconds: 0 };
        case RUN_TIMER:
            return { ...state, seconds: state.seconds + 1 };
        default:
            return state;
    }
}

const start = () => ({ type: START });
const stop = () => ({ type: STOP });
const reset = () => ({ type: RESET });
const runTime = () => ({ type: RUN_TIMER });

export {
    start,
    stop,
    reset,
    runTime,
}



