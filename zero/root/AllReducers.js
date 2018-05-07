/**
 * Created by zerowolf on 2017/12/6.
 */

import {combineReducers} from 'redux';
import {nav} from './Navigators';
import {timer} from '../containers/4Tab/SagaRoot'
import {inquiry_data} from "../containers/project/reducer/Reducer";

export default AllReducers = combineReducers({
    nav:nav,
    timer,
    inquiry_data
});
