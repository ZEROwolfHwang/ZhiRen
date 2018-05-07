/**
 * Created by zerowolf on 2018/3/30.
 */
export const types = {
    FUZZYQUERY: 'fuzzyquery',

};


export const inquiry_data = (state = {}, action) => {
    switch (action.type) {
        case types.FUZZYQUERY:
            return Object.assign(
                {},
                state,
                {payload: action.payload}
            );

        default:
            return state
    }
}

export const actions = {
    inputCurrentText: (text) => ({type:types.FUZZYQUERY, payload: {text: text}})

};
//
// export const inputCurrentText = (data) => {
//     return {
//         type: types.FUZZYQUERY,
//         data
//     };
// };