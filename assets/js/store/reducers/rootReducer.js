import {combineReducers} from "redux";
import UserReducer from "./User/UserReducer";
import DatasetReducer from "./Dataset/DatasetReducer";


const rootReducer = combineReducers({user: UserReducer, dataset: DatasetReducer})

export default rootReducer;